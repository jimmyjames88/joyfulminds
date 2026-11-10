import type { FocusAreaTitle } from './focusAreas';

export interface ServiceContent {
  slug: string;
  label: string;
  introduction: string;
  approachTitle: string;
  approach: string;
  topics: string[];
  focusAreaTitles: FocusAreaTitle[];
  homepage: {
    audience: string;
    description: string;
    topics: string[];
    approach: string;
  };
  questionSections: {
    title: string;
    answer: string;
    points?: string[];
    note?: string;
  }[];
}

export const services: ServiceContent[] = [
  {
    slug: 'individual-counselling',
    label: 'Individual Counselling',
    introduction:
      'Individual counselling offers a dedicated space to make sense of what you are carrying, understand patterns, and reconnect with your own strengths. You do not need a clear goal or the right words before beginning.',
    approachTitle: 'Support shaped around you',
    approach:
      'Counselling is collaborative and grounded in your experiences and priorities. Sessions can make room for both the immediate challenges you are facing and the broader context of your life.',
    topics: [
      'Anxiety, stress, and burnout',
      'Life transitions and changing relationships',
      'Trauma, grief, and emotional overwhelm',
    ],
    focusAreaTitles: [
      'Anxiety',
      'Life transitions',
      'Neurodivergence',
      'Stress & burnout',
      'Relationships',
      'Traumatic events',
      'Wellness',
    ],
    homepage: {
      audience: 'Support for adults',
      description:
        'A dedicated space to make sense of what you are carrying, understand patterns, and reconnect with your strengths. Together, we can explore practical strategies for the here and now or the deeper roots of what is keeping you feeling stuck.',
      topics: ['Anxiety & stress', 'Life transitions', 'Trauma & grief', 'Relationships'],
      approach: 'Support shaped around you',
    },
    questionSections: [
      {
        title: 'When might I consider individual counselling?',
        answer:
          'You do not need to wait until things feel unmanageable. Counselling may be worth considering when a concern keeps returning, a change feels difficult to navigate, or you would value space to understand yourself more clearly. A complimentary conversation can help you explore whether the service feels like a fit.',
      },
      {
        title: 'What might bring me to counselling?',
        answer:
          'People begin counselling for many reasons. You can start with what feels most important right now, even if several experiences overlap or you are not sure how to describe them.',
        points: [
          'Worry, stress, or emotional overwhelm is taking up more of your daily life.',
          'A loss, transition, or relationship concern is leaving you feeling unsettled.',
          'You want to understand recurring patterns and find ways to respond differently.',
        ],
      },
      {
        title: 'How can Rhonda help?',
        answer:
          'Rhonda brings a warm, curious, and non-judgemental approach to understanding your experiences. Together, you can explore practical strategies for the present, make sense of deeper patterns, and identify next steps that reflect your strengths and goals.',
      },
      {
        title: 'What might I get out of individual counselling?',
        answer:
          'The experience is different for everyone. You may build greater awareness of your needs, develop ways to meet stress with more steadiness, and gain clarity about the changes you want to make.',
        note:
          'Therapy cannot promise a particular outcome. Your experience, readiness, and priorities guide the work.',
      },
    ],
  },
  {
    slug: 'womens-counselling',
    label: "Women's Counselling",
    introduction:
      'Women’s counselling offers a space to explore the experiences, changes, and expectations shaping your life. From reproductive and hormonal transitions to relationships, caregiving, and daily responsibilities, you can begin with what feels most important to you right now.',
    approachTitle: 'Support that makes room for you',
    approach:
      'The work begins with listening to your experiences and understanding what you hope will change. Together, we can explore what you are carrying, make sense of patterns, and consider meaningful next steps at a pace that feels manageable.',
    topics: [
      'Pregnancy, menstruation, and changes in reproductive health',
      'Peri-menopause, menopause, and post-menopause',
      'Relationships, caregiving, identity, and the demands of daily life',
    ],
    focusAreaTitles: [
      'Anxiety',
      'Life transitions',
      "Women's health",
      'Stress & burnout',
      'Relationships',
      'Illness, injury, medical changes',
    ],
    homepage: {
      audience: "Women's health & transitions",
      description:
        'Space for the experiences, changes, and expectations shaping your life. From pregnancy and hormonal transitions to relationships, caregiving, and daily responsibilities, we can make room for your needs at a pace that feels manageable.',
      topics: ['Pregnancy & menstruation', 'Menopause transitions', 'Caregiving', 'Identity & relationships'],
      approach: 'Room for your experience',
    },
    questionSections: [
      {
        title: 'When might I consider women’s counselling?',
        answer:
          'You do not need to wait until things feel unmanageable. Counselling may be worth considering when you feel overwhelmed, are navigating a transition, or would value space to understand your needs. A complimentary conversation is a low-pressure way to ask questions and explore whether the service feels like a fit.',
      },
      {
        title: 'What might bring me to counselling?',
        answer:
          'Women seek counselling for many reasons and at different stages of life. You do not need a diagnosis or a clearly defined concern to begin.',
        points: [
          'Changes in your body or health are affecting how you feel day to day.',
          'Caregiving, work, or relationship expectations leave little room for your own needs.',
          'You are navigating a life transition or feeling disconnected from yourself.',
        ],
      },
      {
        title: 'How can Rhonda help?',
        answer:
          'Rhonda offers a collaborative space to talk about your experiences without needing to have everything figured out. Together, you can explore the connections between your circumstances, emotions, and stress responses, clarify your needs, and identify practical next steps that reflect what matters to you.',
      },
      {
        title: 'What might I get out of women’s counselling?',
        answer:
          'The experience is different for everyone. You may gain a clearer understanding of your needs, explore boundaries, and build ways to meet daily life with more steadiness. Counselling can also offer space to consider changes and next steps with greater clarity.',
        note:
          'Therapy cannot promise a particular outcome. The work begins with understanding your goals and what would feel meaningful to you.',
      },
    ],
  },
  {
    slug: 'teen-counselling',
    label: 'Teen Counselling',
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
    focusAreaTitles: [
      'Anxiety',
      'Life transitions',
      'Neurodivergence',
      'Stress & burnout',
      'Relationships',
      'Wellness',
    ],
    homepage: {
      audience: 'Support through adolescence',
      description:
        'A place for teens to talk through changes in relationships, identity, responsibilities, and expectations. Counselling begins with listening to the young person and understanding their goals, with space to discuss privacy and family involvement.',
      topics: ['School & peer relationships', 'Anxiety & stress', 'Identity', 'Family changes'],
      approach: 'A young person’s perspective',
    },
    questionSections: [
      {
        title: 'When might a teen consider counselling?',
        answer:
          'Counselling may be useful when a young person wants space to talk, is finding everyday demands difficult, or is navigating a change. The first step is a conversation about what support is being sought and whether the service is a good fit.',
      },
      {
        title: 'What might bring a teen to counselling?',
        answer:
          'Adolescence can bring several changes at once. Counselling makes room for the young person’s perspective rather than assuming what the concern or goal should be.',
        points: [
          'School, friendships, or family relationships are feeling stressful.',
          'Worry or emotional overwhelm is making daily routines harder.',
          'Questions about identity, changing expectations, or a life transition feel difficult to navigate alone.',
        ],
      },
      {
        title: 'How can Rhonda help?',
        answer:
          'Rhonda starts by listening to the young person and understanding what matters to them. Together, you can explore feelings, recognize strengths, and consider practical ways forward. Privacy, consent, and any family involvement can be discussed before deciding how to proceed.',
      },
      {
        title: 'What might a teen get out of counselling?',
        answer:
          'The experience is different for each young person. Counselling may offer a clearer understanding of emotions and needs, ways to manage stress, and practice communicating concerns or asking for support.',
        note:
          'Therapy cannot promise a particular outcome. Goals and next steps are explored collaboratively with attention to the young person’s needs and readiness.',
      },
    ],
  },
  {
    slug: 'senior-counselling',
    label: 'Senior Counselling',
    introduction:
      'Senior counselling offers space to explore the changes and questions that can arise in later life. From grief and changing health to relationships and daily routines, support begins with your experience and what matters to you.',
    approachTitle: 'Your priorities, your pace',
    approach:
      'Counselling recognizes the strengths, experience, and perspective you bring. Together, we can make room for what feels difficult, explore practical supports, and consider next steps that reflect your needs and priorities.',
    topics: [
      'Retirement, changing routines, and life transitions',
      'Grief, loss, and changes in relationships',
      'The emotional impact of illness, injury, or caregiving',
    ],
    focusAreaTitles: [
      'Anxiety',
      'Life transitions',
      'Stress & burnout',
      'Relationships',
      'Illness, injury, medical changes',
      'Wellness',
    ],
    homepage: {
      audience: 'Support in later life',
      description:
        'Compassionate support for the changes and questions that can arise in later life. We can explore grief, changing health, relationships, and daily routines while recognizing the strengths, experience, and priorities you bring.',
      topics: ['Life transitions', 'Grief & loss', 'Health changes', 'Connection & well-being'],
      approach: 'Your priorities, your pace',
    },
    questionSections: [
      {
        title: 'When might I consider senior counselling?',
        answer:
          'You may want support during a particular transition or simply value a space to talk about what life feels like now. You do not need to wait for a crisis or have a clearly defined concern before reaching out.',
      },
      {
        title: 'What might bring me to counselling?',
        answer:
          'Later life can bring both possibilities and challenges. Counselling offers room for your own perspective on these changes, without assumptions about what this stage of life should look like.',
        points: [
          'A loss, retirement, or changing routine is affecting your sense of connection or purpose.',
          'Changes in health or caregiving responsibilities are bringing emotional strain.',
          'You would like support with worry, relationships, or decisions about what comes next.',
        ],
      },
      {
        title: 'How can Rhonda help?',
        answer:
          'Rhonda offers a warm, collaborative space to understand what you are carrying and what support would feel useful. Together, you can explore grief and transitions, build on existing strengths, and identify practical next steps at your pace.',
      },
      {
        title: 'What might I get out of senior counselling?',
        answer:
          'The experience is different for everyone. You may find space to process a loss, clarify your needs, strengthen connection, or develop ways to meet changes with greater steadiness.',
        note:
          'Therapy cannot promise a particular outcome. The work is guided by your experiences, goals, and readiness.',
      },
    ],
  },
];
