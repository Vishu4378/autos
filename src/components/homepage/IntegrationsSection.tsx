import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "Slack", category: "Communication" },
  { name: "Notion", category: "Productivity" },
  { name: "Stripe", category: "Payments" },
  { name: "GitHub", category: "Development" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Airtable", category: "Database" },
  { name: "Twilio", category: "Communication" },
  { name: "SendGrid", category: "Email" },
  { name: "OpenAI", category: "AI" },
  { name: "Google", category: "Productivity" },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Integrations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Connect with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              500+ applications
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From CRMs to databases, communication tools to AI services. 
            If it has an API, you can automate it.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-4 flex flex-col items-center text-center cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-sm">{integration.name}</span>
              <span className="text-xs text-muted-foreground mt-1">
                {integration.category}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            View All Integrations
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
