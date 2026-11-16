import type { site } from '../data/site';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
type SchemaNode = { '@type': string; [key: string]: JsonValue };

export interface ServiceSchema {
  name: string;
  description: string;
  isCounselling: boolean;
}

export interface PageSchemaOptions {
  practice: typeof site;
  canonical: URL;
  title: string;
  description: string;
  logoUrl: string;
  portraitUrl: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage';
  breadcrumbLabel?: string;
  service?: ServiceSchema;
}

export function canonicalUrl(pathname: string, origin: URL): URL {
  const url = new URL(pathname, origin);
  url.pathname = url.pathname.replace(/\/+$/, '') || '/';
  url.search = '';
  url.hash = '';
  return url;
}

export function createPageSchema({
  practice,
  canonical,
  title,
  description,
  logoUrl,
  portraitUrl,
  pageType = 'WebPage',
  breadcrumbLabel,
  service,
}: PageSchemaOptions) {
  const home = new URL('/', canonical).href;
  const organizationId = `${home}#organization`;
  const websiteId = `${home}#website`;
  const personId = new URL('/about#rhonda', canonical).href;
  const pageId = `${canonical.href}#webpage`;
  const serviceId = `${canonical.href}#service`;
  const breadcrumbId = `${canonical.href}#breadcrumb`;
  const areas = practice.licences.map(({ province }) => ({
    '@type': 'AdministrativeArea',
    name: province,
    containedInPlace: { '@type': 'Country', name: 'Canada' },
  }));
  const graph: SchemaNode[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: practice.name,
      url: home,
      logo: logoUrl,
      email: practice.email,
      telephone: practice.phoneHref.replace('tel:', ''),
      description: practice.serviceArea,
      areaServed: areas,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: home,
      name: practice.name,
      inLanguage: 'en-CA',
      publisher: { '@id': organizationId },
    },
    {
      '@type': pageType,
      '@id': pageId,
      url: canonical.href,
      name: title,
      description,
      inLanguage: 'en-CA',
      isPartOf: { '@id': websiteId },
      about: { '@id': pageType === 'AboutPage' ? personId : organizationId },
      ...(service
        ? { mainEntity: { '@id': serviceId } }
        : pageType === 'AboutPage' ? { mainEntity: { '@id': personId } } : {}),
      ...(breadcrumbLabel ? { breadcrumb: { '@id': breadcrumbId } } : {}),
    },
  ];

  if (pageType === 'AboutPage') {
    graph.push({
      '@type': 'Person',
      '@id': personId,
      name: practice.practitioner,
      honorificSuffix: practice.credentials,
      jobTitle: 'Registered Social Worker',
      url: canonical.href,
      image: portraitUrl,
      affiliation: { '@id': organizationId },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Windsor' },
      identifier: practice.licences.map(({ body, number }) => ({
        '@type': 'PropertyValue',
        propertyID: body,
        value: number.replace('#', ''),
      })),
    });
  }

  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': serviceId,
      url: canonical.href,
      name: service.name,
      serviceType: service.name,
      description: service.description,
      provider: { '@id': organizationId },
      mainEntityOfPage: { '@id': pageId },
      ...(service.isCounselling ? {
        areaServed: areas,
        availableChannel: {
          '@type': 'ServiceChannel',
          name: 'Virtual counselling',
          serviceUrl: practice.bookingHref,
        },
      } : {}),
    });
  }

  if (breadcrumbLabel) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: home },
        { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: canonical.href },
      ],
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function serializeJsonLd(value: ReturnType<typeof createPageSchema>): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
