export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "document-handling",
    title: "Document Handling",
    icon: "📄",
    tagline: "Estimates, invoices, work orders — automated and organized.",
    description:
      "Every job generates paper. Estimates, work orders, invoices, receipts, warranties. Most trade businesses are managing all of it manually — or losing track of it entirely. We set up systems that create, send, store, and track your documents automatically so nothing falls through the cracks and you look professional every time.",
    bullets: [
      "Automated estimate and invoice generation",
      "Digital work order creation and tracking",
      "Document storage and retrieval",
      "Customer-facing document portals",
      "Integration with your existing tools",
    ],
  },
  {
    slug: "scheduling",
    title: "Scheduling Automation",
    icon: "📅",
    tagline: "Stop playing phone tag. Let the calendar fill itself.",
    description:
      "Scheduling is one of the biggest time sinks in any trade business. Back-and-forth calls to book appointments, manual reminder texts, no-shows, double bookings. We set up scheduling systems that let customers book online, send automatic reminders, and keep your calendar organized — so you spend less time on the phone and more time on the job.",
    bullets: [
      "Online booking for customers",
      "Automated appointment reminders",
      "Technician dispatch and routing",
      "Calendar syncing across your team",
      "No-show and cancellation handling",
    ],
  },
  {
    slug: "workflow-audit",
    title: "Workflow Audit",
    icon: "🔍",
    tagline: "Find where your time and money are leaking out.",
    description:
      "Before you fix anything, you need to know what's actually broken. Our workflow audit walks through every part of how your business operates — how jobs come in, how they get scheduled, how work gets done, how you get paid, how you communicate with customers. We find the bottlenecks, the manual steps, and the spots where time and money are leaking out, then give you a plain-English plan to fix them.",
    bullets: [
      "End-to-end business process review",
      "Time and cost leak identification",
      "Tool and software audit",
      "Plain-English findings report",
      "Prioritized recommendations with estimated impact",
    ],
  },
  {
    slug: "tool-vendor-selection",
    title: "Tool & Vendor Selection",
    icon: "🔧",
    tagline: "Cut through the noise. Know what's actually worth buying.",
    description:
      "There are hundreds of apps, platforms, and software tools all promising to fix your business. Most of them aren't worth the subscription. We evaluate tools based on your specific operation, budget, and tech comfort level — and tell you straight what to buy, what to skip, and what you already have that you're not using right.",
    bullets: [
      "Software and app evaluation",
      "Field service management tools",
      "Accounting and invoicing platforms",
      "Communication and CRM tools",
      "Setup and onboarding support",
    ],
  },
  {
    slug: "ai-tools",
    title: "Custom AI Tools",
    icon: "🤖",
    tagline: "Simple AI built for the way your business works.",
    description:
      "Sometimes off-the-shelf software doesn't fit. We build simple, purpose-built AI tools for trade businesses — things like an estimating assistant that knows your pricing, a customer FAQ bot for your website, or an automated follow-up system for leads. Nothing overcomplicated. One tool, one job, done right.",
    bullets: [
      "AI estimating assistants",
      "Customer-facing chat and FAQ bots",
      "Automated lead follow-up",
      "Job notes and report generation",
      "Custom workflow automation",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
