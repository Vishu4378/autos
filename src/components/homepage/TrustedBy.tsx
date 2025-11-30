import { motion } from "framer-motion";

const brands = [
  "Stripe",
  "Shopify",
  "Notion",
  "Slack",
  "Figma",
  "Linear",
  "Vercel",
  "Discord",
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
