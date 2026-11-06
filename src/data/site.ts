export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: 'Joyful Minds Counselling',
  tagline: 'Online Counselling & Therapy',
  practitioner: 'Rhonda Hilker',
  credentials: 'MSW, RSW',
  // Transcribed from the Stitch design; verify before launch.
  email: 'rhonda@joyfulminds.ca',
  phone: '(403) 312-6532',
  phoneHref: 'tel:+14033126532',
  licences: [
    { province: 'Alberta', body: 'ACSW', number: '#20412' },
    { province: 'Ontario', body: 'OCSWSSW', number: '#859099' },
  ],
  serviceArea: 'Virtual counselling sessions available across Alberta and Ontario.',
} as const;

export const mailto = (subject?: string) =>
  subject ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : `mailto:${site.email}`;

export const primaryNav: NavLink[] = [
  { label: 'Counselling', href: '#focus' },
  { label: 'About Rhonda', href: '/about' },
  { label: 'Team Workshops', href: '#workshops' },
  { label: 'Contact', href: '#contact' },
];

export const consultHref = mailto('Free 30-minute consultation');
