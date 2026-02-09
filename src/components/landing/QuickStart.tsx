import { motion } from "framer-motion";

const installSteps = [
  { step: "Install", code: "pip install llmtrace" },
  { step: "Run", code: "llmtrace serve --port 8080 --target https://api.openai.com" },
  { step: "Use", code: 'client = OpenAI(base_url="http://localhost:8080/v1")' },
];

const QuickStart = () => {
  return (
    <section id="quickstart" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Up and Running in <span className="text-gradient">30 Seconds</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Three commands. That's it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-border/50 bg-card glow-border overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="p-6 space-y-6">
            {installSteps.map((s, i) => (
              <div key={i}>
                <div className="font-mono text-xs text-primary/70 mb-2 uppercase tracking-wider">
                  {`# Step ${i + 1}: ${s.step}`}
                </div>
                <div className="font-mono text-sm md:text-base text-foreground/90 bg-background/50 rounded-lg px-4 py-3 border border-border/30">
                  <span className="text-primary mr-2">$</span>{s.code}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStart;
