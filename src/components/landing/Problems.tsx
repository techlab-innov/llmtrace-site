import { motion } from "framer-motion";
import { ShieldAlert, Eye, DollarSign, Zap } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Prompt Injection",
    description: "Malicious inputs hijack your agent's behavior, bypassing safety controls and executing unintended actions.",
  },
  {
    icon: Eye,
    title: "PII Leaks",
    description: "Sensitive data slips into LLM requests undetected — names, emails, credentials exposed to third-party APIs.",
  },
  {
    icon: DollarSign,
    title: "Cost Overruns",
    description: "Runaway token usage and unchecked model calls silently drain your budget with zero visibility.",
  },
  {
    icon: Zap,
    title: "Performance Bottlenecks",
    description: "Latency spikes and slow responses degrade user experience without clear diagnostics to identify the cause.",
  },
];

const Problems = () => {
  return (
    <section id="problems" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your LLM Traffic Is a <span className="text-gradient">Blind Spot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Without observability, every API call is a risk you can't see.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
