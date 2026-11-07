export interface ServiceContent {
  slug: string;
  label: string;
  introduction: string;
  approachTitle: string;
  approach: string;
  topics: string[];
  questionSections?: {
    title: string;
    answer: string;
    points?: string[];
    note?: string;
  }[];
}

export const services: ServiceContent[] = [
  {
    slug: 'couples-therapy',
    label: 'Couples Therapy',
    introduction:
      'Couples therapy offers partners a space to slow down difficult conversations, understand recurring patterns, and make room for each person’s perspective. You can begin with what feels most important in your relationship right now.',
    approachTitle: 'A shared space for understanding',
    approach:
      'The work begins by learning what each person hopes for and what has been getting in the way. Together, you can explore patterns in communication and consider meaningful next steps at a pace that feels manageable.',
    topics: [
      'Communication and recurring conflict',
      'Disconnection, trust, or changing needs',
      'Navigating stress and transitions together',
    ],
    questionSections: [
      {
        title: 'Do we need couples therapy? When should we consider it?',
        answer:
          'You do not need to wait until the relationship is at a breaking point. It may be worth considering when either of you feels stuck, wants help understanding what is happening, or would value a supported conversation. A complimentary conversation is a low-pressure way to ask questions and explore whether the service feels like a fit.',
      },
      {
        title: 'What are signs couples therapy could help?',
        answer:
          'Couples consider therapy at different points in their relationship, often when it becomes difficult to talk about concerns or feel understood.',
        points: [
          'Conversations often return to the same conflict or end in withdrawal.',
          'You are feeling increasingly disconnected or unsure how to rebuild trust.',
          'A change or source of stress is affecting how you relate to each other.',
        ],
      },
      {
        title: 'How can Rhonda help?',
        answer:
          'Rhonda can guide the conversation so each partner has space to share their perspective. Together, you can slow down recurring patterns, clarify needs, and explore practical next steps that reflect what matters to both of you.',
      },
      {
        title: 'What might we get out of couples therapy?',
        answer:
          'The experience is different for every couple. You may gain a clearer understanding of your relationship patterns, practice expressing needs, and find new ways to approach difficult conversations. The process can also help you consider next steps with greater clarity.',
        note:
          'Therapy cannot promise a particular outcome. The work begins with understanding your goals and what would feel meaningful to you.',
      },
    ],
  },
  {
    slug: '#',
    label: 'Individual Therapy',
    introduction:
      'Individual therapy offers a dedicated space to make sense of what you are carrying, understand patterns, and reconnect with your own strengths. You do not need a clear goal or the right words before beginning.',
    approachTitle: 'Support shaped around you',
    approach:
      'Counselling is collaborative and grounded in your experiences and priorities. Sessions can make room for both the immediate challenges you are facing and the broader context of your life.',
    topics: [
      'Anxiety, stress, and burnout',
      'Life transitions and changing relationships',
      'Trauma, grief, and emotional overwhelm',
    ],
  },
  {
    slug: '#',
    label: 'Child/Youth Therapy',
    introduction:
      'Child and youth therapy provides a supportive setting to explore feelings, experiences, and challenges as they arise. Each young person brings their own perspective, strengths, and way of communicating.',
    approachTitle: 'A thoughtful, age-aware approach',
    approach:
      'The first step is to understand what support is being sought and whether the service is a good fit. The young person’s needs, family context, and questions about privacy can be discussed before getting started.',
    topics: [
      'Understanding and expressing emotions',
      'Stressful changes at home, school, or in relationships',
      'Building on personal strengths and coping resources',
    ],
  },
  {
    slug: '#',
    label: 'Adolescent/Teen Therapy',
    introduction:
      'Adolescence can bring changes in relationships, identity, responsibilities, and expectations. Therapy can offer teens a place to talk through what is happening and consider what support would feel useful.',
    approachTitle: 'Making space for a teen’s perspective',
    approach:
      'Counselling starts with listening to the young person and understanding their goals. Questions about family involvement and privacy can be discussed together before deciding how to proceed.',
    topics: [
      'Anxiety, stress, and emotional overwhelm',
      'School, peer, and family relationships',
      'Life changes, identity, and finding ways forward',
    ],
  },
  {
    slug: '#',
    label: 'Family Therapy',
    introduction:
      'Family therapy brings attention to the relationships and patterns that shape family life. It can provide a space to hear different perspectives and work toward clearer, more supportive ways of relating.',
    approachTitle: 'Understanding the family system',
    approach:
      'Family members can identify what they hope will change and what each person needs from the conversation. The focus is on building understanding and finding practical next steps together.',
    topics: [
      'Communication and recurring patterns',
      'Transitions and changes affecting the family',
      'Strengthening understanding and connection',
    ],
  },
  {
    slug: '#',
    label: 'Organizations',
    introduction:
      'Mental health workshops for organizations are shaped around the needs of each team. Reach out to discuss your workplace, the questions your group is navigating, and possible topics for a workshop.',
    approachTitle: 'Workshops shaped for your team',
    approach:
      'Sessions can be tailored to the context and priorities of your organization. Existing workshop topics include team communication, stress responses, work-life balance, and understanding brains at work.',
    topics: [
      'Communication and team building',
      'Managing stress responses and busy schedules',
      'Self-care, work-life balance, and grief in the workplace',
    ],
  },
];
