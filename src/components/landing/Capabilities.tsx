import { motion } from "framer-motion";
import { Activity, ShieldCheck, DollarSign, Timer, Plug, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Stream and inspect every request and response as it flows through the proxy.",
  },
  {
    icon: ShieldCheck,
    title: "Attack Detection",
    description: "Identify prompt injection, jailbreak attempts, and adversarial inputs automatically.",
  },
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description: "Track token usage, model costs, and budget alerts per-request and per-user.",
  },
  {
    icon: Timer,
    title: "Latency Analysis",
    description: "Measure time-to-first-token, total duration, and identify slow endpoints.",
  },
  {
    icon: Plug,
    title: "OpenAI-Compatible",
    description: "Works with any OpenAI-compatible SDK or API — no vendor lock-in.",
  },
  {
    icon: BarChart3,
    title: "Logging & Analytics",
    description: "Structured logs for every interaction with searchable, filterable dashboards.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Full-Stack <span className="text-gradient">Observability</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to secure, monitor, and optimize your LLM-powered applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
