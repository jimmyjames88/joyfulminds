import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../data/site';

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedContactMethods = ['Phone call', 'Email'];
const allowedProvinces = ['Alberta', 'Ontario'];

function getField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function cleanSingleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
}

function jsonResponse(message: string, status: number): Response {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error('Could not parse call-back form submission.', error);
    return jsonResponse('Please check your details and try again.', 400);
  }

  const name = cleanSingleLine(getField(formData, 'name'));
  const phone = cleanSingleLine(getField(formData, 'phone'));
  const email = getField(formData, 'email');
  const contactMethod = getField(formData, 'contact-method');
  const province = getField(formData, 'province');
  const note = getField(formData, 'note').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '');
  const honeypot = getField(formData, 'website');

  if (
    honeypot ||
    !name ||
    name.length > 120 ||
    !phone ||
    phone.length > 40 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !allowedContactMethods.includes(contactMethod) ||
    !allowedProvinces.includes(province) ||
    note.length > 1000
  ) {
    return jsonResponse('Please check your details and try again.', 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !sender) {
    console.error('Call-back form is unavailable: RESEND_API_KEY and RESEND_FROM_EMAIL must be configured.');
    return jsonResponse('The form is temporarily unavailable. Please email Rhonda directly.', 503);
  }

  const resend = new Resend(apiKey);
  let result: Awaited<ReturnType<typeof resend.emails.send>>;

  try {
    result = await resend.emails.send({
      from: sender,
      to: [site.email],
      replyTo: email,
      subject: `Call-back request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Preferred contact method: ${contactMethod}`,
        `Province: ${province}`,
        `Preferred times or question: ${note || 'Not provided'}`,
      ].join('\n'),
    });
  } catch (error) {
    console.error('Resend request for call-back form failed.', error);
    return jsonResponse('Your request could not be sent. Please try again or email Rhonda directly.', 502);
  }

  if (result.error) {
    console.error('Resend could not send the call-back email.', result.error.message);
    return jsonResponse('Your request could not be sent. Please try again or email Rhonda directly.', 502);
  }

  return jsonResponse('Your request has been sent. Rhonda will be in touch soon.', 200);
};
