import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowNodeProps {
  icon: LucideIcon;
  label: string;
  color: "primary" | "secondary" | "accent";
  delay?: number;
  className?: string;
}

const colorClasses = {
  primary: "bg-primary/20 border-primary/50 text-primary",
  secondary: "bg-secondary/20 border-secondary/50 text-secondary",
  accent: "bg-accent/20 border-accent/50 text-accent",
};

const glowClasses = {
  primary: "shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
  secondary: "shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
  accent: "shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
};

const WorkflowNode = ({ icon: Icon, label, color, delay = 0, className }: WorkflowNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay }}
        className={cn(
          "w-16 h-16 rounded-2xl border-2 flex items-center justify-center backdrop-blur-sm",
          colorClasses[color],
          glowClasses[color]
        )}
      >
        <Icon className="w-7 h-7" />
      </motion.div>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </motion.div>
  );
};

export default WorkflowNode;
