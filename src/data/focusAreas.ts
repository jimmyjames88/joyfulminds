import type { IconName } from '../components/ui/Icon.astro';

export interface FocusArea {
  title: string;
  description: string;
  icon: IconName;
  accent: 'terracotta' | 'sage';
  showOnHomepage?: boolean;
}

export const focusAreas = [
  {
    title: 'Anxiety',
    icon: 'activity',
    accent: 'terracotta',
    description:
      'Racing thoughts, persistent worry, and the constant hum of "what if" can make it difficult to rest or feel present. Anxiety may also show up as tension, restlessness, or avoiding situations that feel overwhelming. Together, we can explore what fuels these responses and find practical ways to meet uncertainty with more steadiness and self-trust.',
  },
  {
    title: 'Dental anxiety',
    icon: 'tooth',
    accent: 'terracotta',
    showOnHomepage: false,
    description:
      'Dental anxiety can make appointments feel overwhelming or difficult to attend. Counselling offers space to explore what may be contributing to the anxiety and identify coping strategies that feel manageable for you.',
  },
  {
    title: 'Life transitions',
    icon: 'compass',
    accent: 'sage',
    description:
      'Changes in career, identity, caregiving, parenting, or schooling can unsettle familiar routines and your sense of who you are. Even a welcome change can bring grief, uncertainty, or conflicting feelings about what comes next. Counselling offers space to acknowledge what you are leaving behind, clarify what matters now, and navigate the transition at your own pace.',
  },
  {
    title: "Women's health",
    icon: 'flower',
    accent: 'terracotta',
    description:
      'Pregnancy, menstruation, peri-menopause, menopause, and post-menopause can bring emotional shifts alongside changes in your body and daily capacities. These experiences may overlap with relationship needs, caregiving responsibilities, or expectations to keep carrying on as usual. Counselling makes room for your experience, helping you explore your needs, communicate boundaries, and consider support that fits this stage of life.',
  },
  {
    title: 'Neurodivergence',
    icon: 'eye',
    accent: 'sage',
    description:
      'Living with ADHD, autism, or a different way of processing the world can shape how you experience relationships, routines, sensory input, and everyday demands. The effort of masking or adapting to expectations may leave little room for your own needs. Together, we can explore your strengths and challenges without judgement, and consider approaches that work with your mind rather than against it.',
  },
  {
    title: 'Stress & burnout',
    icon: 'flame',
    accent: 'terracotta',
    description:
      'When the load has been too heavy for too long, you may feel exhausted, disconnected, irritable, or unable to recover through rest alone. Work, caregiving, and ongoing responsibilities can leave little space to notice your limits until you have passed them. Counselling can help you understand the pressures you are carrying, explore boundaries, and identify realistic changes that make room for recovery.',
  },
  {
    title: 'PTSD',
    icon: 'shield',
    accent: 'sage',
    description:
      'After a traumatic experience, reminders of what happened may bring intrusive memories, nightmares, heightened alertness, or a sense of disconnection. These responses can affect sleep, relationships, and how safe everyday life feels, even when the immediate danger has passed. Counselling offers a carefully paced space to understand these reactions, develop grounding strategies, and work toward a greater sense of safety without pressure to share everything at once.',
  },
  {
    title: 'Relationships',
    icon: 'users',
    accent: 'terracotta',
    description:
      'Past hurts and attachment injuries can shape how safe it feels to trust, express your needs, or stay connected when conflict arises. You may notice recurring patterns of withdrawing, people-pleasing, or feeling responsible for others at the expense of yourself. Individual counselling offers space to understand these patterns, explore boundaries, and practise ways of relating that honour both connection and your own needs.',
  },
  {
    title: 'Traumatic events',
    icon: 'heart',
    accent: 'sage',
    description:
      'A single overwhelming event or repeated experiences of harm can affect your emotions, sense of self, and ability to feel safe with others. You do not need a diagnosis or a clear account of what happened to seek support. Together, we can begin with what feels most important now, build resources for daily life, and approach difficult experiences with care and pacing that respects your readiness.',
  },
  {
    title: 'Illness, injury, medical changes',
    icon: 'cross',
    accent: 'terracotta',
    description:
      'A diagnosis, injury, or change in health can bring uncertainty, grief, and shifts in independence, identity, or daily routines. Navigating recovery, ongoing symptoms, or medical appointments may also affect relationships and your sense of control. Alongside your medical care, counselling offers space to process the emotional impact, communicate your needs, and consider what support and meaningful daily life can look like now.',
  },
  {
    title: 'Wellness',
    icon: 'sprout',
    accent: 'sage',
    description:
      'Counselling is one way to support your wellness, even when there is no immediate crisis or single concern to address. You may want to understand yourself more clearly, strengthen relationships, or make more room for rest, connection, and what gives life meaning. Together, we can build awareness of your needs and explore practical habits that support steadiness and help you grow your capacity over time.',
  },
] as const satisfies readonly FocusArea[];

export type FocusAreaTitle = (typeof focusAreas)[number]['title'];
