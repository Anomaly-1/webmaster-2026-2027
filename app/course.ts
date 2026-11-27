type LessonState = "start" | "next" | "later";

type CourseSection = {
  id: string;
  title: string;
  description: string;
  lessons: { id: string; title: string; description: string; state: LessonState }[];
};

// The order here determines the display order. States are examples for the menu preview.
export const course: CourseSection[] = [
  {
    id: "understand",
    title: "Understand",
    description: "Get to know how AI works.",
    lessons: [
      {
        id: "what-is-ai",
        title: "What is AI?",
        description: "Spot AI in the things you use every day.",
        state: "start",
      },
      {
        id: "learning-from-data",
        title: "How AI learns",
        description: "See how models find patterns in data.",
        state: "next",
      },
    ],
  },
  {
    id: "apply",
    title: "Apply",
    description: "Put AI tools and techniques into practice.",
    lessons: [
      {
        id: "write-a-prompt",
        title: "Write a better prompt",
        description: "Give an AI tool a clear task and useful context.",
        state: "later",
      },
      {
        id: "check-an-answer",
        title: "Check an AI answer",
        description: "Verify a claim before you use it.",
        state: "later",
      },
    ],
  },
  {
    id: "decide",
    title: "Decide",
    description: "Make thoughtful choices about when and how to use AI.",
    lessons: [
      {
        id: "ai-and-schoolwork",
        title: "AI and schoolwork",
        description: "Decide when AI fits the rules of an assignment.",
        state: "later",
      },
      {
        id: "spot-the-bias",
        title: "Spot the bias",
        description: "Ask whose perspective an AI answer might miss.",
        state: "later",
      },
    ],
  },
];
