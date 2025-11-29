import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Mail,
  Database,
  Send,
  Webhook,
  FileJson,
  Bot,
} from "lucide-react";
import WorkflowNode from "./WorkflowNode";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl " />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Now with 500+ integrations
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
          >
            Automate anything.
            <br />
            <span className="gradient-text">Build without limits.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Connect your apps, automate workflows, and scale your business with
            the most powerful no-code automation platform. Start free, grow
            infinitely.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Button variant="hero" size="xl">
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
          >
            {[
              { value: "50M+", label: "Workflows Run" },
              { value: "500+", label: "Integrations" },
              { value: "99.9%", label: "Uptime" },
              { value: "10K+", label: "Companies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Workflow Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 relative"
          >
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <WorkflowNode
                icon={Webhook}
                label="Trigger"
                color="primary"
                delay={0}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
              />

              <WorkflowNode
                icon={Database}
                label="Database"
                color="secondary"
                delay={0.2}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-secondary/50 to-accent/50"
              />

              <WorkflowNode
                icon={Bot}
                label="AI Process"
                color="accent"
                delay={0.4}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-accent/50 to-primary/50"
              />

              <WorkflowNode
                icon={FileJson}
                label="Transform"
                color="primary"
                delay={0.6}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
              />

              <WorkflowNode
                icon={Mail}
                label="Email"
                color="secondary"
                delay={0.8}
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-secondary/50 to-primary/50"
              />

              <WorkflowNode
                icon={Send}
                label="Notify"
                color="primary"
                delay={1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
