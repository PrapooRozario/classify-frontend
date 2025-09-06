type FeatureType = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string
};
export const featuresData : FeatureType[] = [
    {
      title: "Class schedule tracker",
      description:
        "Helps students keep track of their daily or weekly classes, so they don’t miss lectures.",
      buttonText: "Track Now",
      buttonLink: "/dashboard/schedule",
    },
    {
      title: "Budget tracker",
      description:
        "Manage money easily by tracking income, expenses, and savings with statistics.",
      buttonText: "Manage Budget",
     buttonLink: "/dashboard/budget",

    },
    {
      title: "Exam Q&A generator",
      description:
        "Generate practice questions (MCQs, short answers, true/false) with difficulty levels.",
      buttonText: "Generate Questions",
      buttonLink: "/dashboard/exam",

    },
    {
      title: "Study planner",
      description:
        "Break down big study goals into smaller, manageable tasks with allocated time slots.",
      buttonText: "Plan Study",
      buttonLink: "/dashboard/plan",

    },
    {
      title: "Leaderboard",
      description:
        "See your progress rank among peers and stay motivated with a leaderboard.",
      buttonText: "View Rank",
      buttonLink: "/dashboard/leaderboard",

    },
    {
      title: "AI Assistant",
      description:
        "Get instant help with study tips, task automation, and explanations.",
      buttonText: "Ask AI",
      buttonLink: "/dashboard/ai",
    },
  ];