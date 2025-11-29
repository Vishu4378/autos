import { motion } from "framer-motion";
import { MousePointer, Workflow, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Choose Your Trigger",
    description: "Select from 500+ app integrations or use webhooks, schedules, and manual triggers to start your workflow.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Build Your Flow",
    description: "Use our visual builder to connect apps, add logic, transform data, and handle errors with ease.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Activate your workflow and watch it run automatically. Scale to millions of executions effortlessly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Get started in
            <br />
            <span className="gradient-text-secondary">three simple steps</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center border border-border">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
