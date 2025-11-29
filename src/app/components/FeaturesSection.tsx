import { motion } from "framer-motion";
import {
  Zap,
  GitBranch,
  Shield,
  Clock,
  Code2,
  BarChart3,
  Layers,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Triggers",
    description:
      "React to events in real-time with webhooks, schedules, and app triggers. Zero latency automation.",
    color: "primary" as const,
  },
  {
    icon: GitBranch,
    title: "Visual Builder",
    description:
      "Drag-and-drop workflow builder with conditional logic, loops, and error handling built-in.",
    color: "secondary" as const,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC2 compliant, end-to-end encryption, and role-based access control for your team.",
    color: "accent" as const,
  },
  {
    icon: Clock,
    title: "Scheduled Workflows",
    description:
      "Run automations on custom schedules from every minute to complex cron expressions.",
    color: "primary" as const,
  },
  {
    icon: Code2,
    title: "Custom Code",
    description:
      "Add JavaScript, Python, or HTTP requests when you need complete flexibility.",
    color: "secondary" as const,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor execution history, track performance, and get alerts on failures instantly.",
    color: "accent" as const,
  },
  {
    icon: Layers,
    title: "Version Control",
    description:
      "Track changes, rollback anytime, and collaborate with your team on workflows.",
    color: "primary" as const,
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Deploy workflows to edge locations worldwide for the fastest possible execution.",
    color: "secondary" as const,
  },
];

const colorClasses = {
  primary:
    "from-primary/20 to-primary/5 border-primary/20 group-hover:border-primary/40",
  secondary:
    "from-secondary/20 to-secondary/5 border-secondary/20 group-hover:border-secondary/40",
  accent:
    "from-accent/20 to-accent/5 border-accent/20 group-hover:border-accent/40",
};

const iconColorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Everything you need to
            <br />
            <span className="gradient-text">automate at scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for teams of all sizes. From simple
            automations to complex enterprise workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full p-6 rounded-2xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  colorClasses[feature.color]
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-4 ${
                    iconColorClasses[feature.color]
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
