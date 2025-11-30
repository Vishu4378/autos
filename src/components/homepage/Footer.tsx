import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Resources: [
    "Documentation",
    "API Reference",
    "Community",
    "Templates",
    "Blog",
  ],
  Company: ["About", "Careers", "Press", "Partners", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "Cookies"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl">
                Auto<span className="text-primary">Sync</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              The most powerful automation platform for modern teams. Connect
              apps, automate workflows, scale infinitely.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Autos. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
