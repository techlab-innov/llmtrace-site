import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "Your App", sublabel: "OpenAI SDK calls" },
  { label: "LLMTrace", sublabel: "Inspect · Protect · Log" },
  { label: "LLM API", sublabel: "OpenAI, Anthropic, etc." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Drop-In <span className="text-gradient">Proxy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Change one line — your <code className="font-mono text-primary/80">base_url</code> — and get full visibility. Zero code changes to your application logic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className={`
                rounded-xl border px-8 py-6 text-center min-w-[180px]
                ${i === 1 ? "border-primary/50 bg-primary/5 glow-border" : "border-border/50 bg-card"}
              `}>
                <div className={`font-semibold text-lg mb-1 ${i === 1 ? "text-gradient" : ""}`}>
                  {step.label}
                </div>
                <div className="font-mono text-xs text-muted-foreground">{step.sublabel}</div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground mx-4 shrink-0 hidden md:block" />
              )}
              {i < steps.length - 1 && (
                <div className="h-6 w-px bg-border/50 md:hidden my-2" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
