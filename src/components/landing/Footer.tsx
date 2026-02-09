import { motion } from "framer-motion";
import { Github, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/llmtrace/llmtrace";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      {/* CTA band */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Protect Your AI Agent</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Open-source. Self-hosted. Zero vendor lock-in. Start securing your LLM traffic today.
            </p>
            <Button size="lg" className="text-base px-10 h-12 glow-cyan" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Get Started on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border/30 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm">LLMTrace</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={`${GITHUB_URL}#readme`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docs</a>
            <a href={`${GITHUB_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">License</a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LLMTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
