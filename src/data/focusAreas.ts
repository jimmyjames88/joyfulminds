import type { IconName } from '../components/ui/Icon.astro';

export interface FocusArea {
  title: string;
  description: string;
  icon: IconName;
  accent: 'terracotta' | 'sage';
}

export const focusAreas = [
  {
    title: 'Anxiety',
    icon: 'activity',
    accent: 'terracotta',
    description: 'Racing thoughts, worry, and the constant hum of ‘what if’.',
  },
  {
    title: 'Life transitions',
    icon: 'compass',
    accent: 'sage',
    description:
      'Career, identity, grief and loss, caregiving, parenting and schooling — the crossings that unsettle us.',
  },
  {
    title: "Women's health",
    icon: 'flower',
    accent: 'terracotta',
    description:
      'Pregnancy, menstruation, peri-menopause, menopause, post-menopause, and still managing day to day life.',
  },
  {
    title: 'Neurodivergence',
    icon: 'eye',
    accent: 'sage',
    description: 'ADHD, autism, and the lived experience of a different kind of mind.',
  },
  {
    title: 'Stress & burnout',
    icon: 'flame',
    accent: 'terracotta',
    description: 'When the load has been too heavy for too long.',
  },
  {
    title: 'PTSD',
    icon: 'shield',
    accent: 'sage',
    description: 'The aftermath of events that the nervous system has not finished processing.',
  },
  {
    title: 'Relationships',
    icon: 'users',
    accent: 'terracotta',
    description: 'Attachment injuries and old relational wounds that shape how safe connection feels now.',
  },
  {
    title: 'Traumatic events',
    icon: 'heart',
    accent: 'sage',
    description: 'Single-incident or complex trauma, held with care and pacing.',
  },
  {
    title: 'Illness, injury, medical changes',
    icon: 'cross',
    accent: 'terracotta',
    description:
      'Navigating diagnosis, recovery, and the emotional weight of changes to your body or health.',
  },
  {
    title: 'Wellness',
    icon: 'sprout',
    accent: 'sage',
    description:
      'Counselling is one way to increase your wellness — building the awareness, skills, and steadiness that help you meet daily life with more ease and grow your capacity over time.',
  },
] as const satisfies readonly FocusArea[];

export type FocusAreaTitle = (typeof focusAreas)[number]['title'];
