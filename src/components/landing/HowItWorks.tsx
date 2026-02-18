import { motion } from "framer-motion";
import { Shield, ArrowRight, Eye, Lock, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 overflow-hidden">
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

        {/* Animated Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Desktop flow */}
          <div className="hidden md:flex items-center justify-center gap-0 relative">
            {/* Your App */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10 rounded-xl border border-border/50 bg-card px-8 py-6 text-center min-w-[180px]"
            >
              <div className="font-semibold text-lg mb-1">Your App</div>
              <div className="font-mono text-xs text-muted-foreground">OpenAI SDK calls</div>
            </motion.div>

            {/* Animated connection line 1 */}
            <div className="relative w-28 h-12 flex items-center justify-center">
              <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-border/30" />
              {/* Flowing packets */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`packet-right-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{ left: 0 }}
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <ArrowRight className="relative z-10 h-4 w-4 text-primary/60" />
            </div>

            {/* LLMTrace Proxy — the hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10"
            >
              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 blur-xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-xl border border-primary/50 bg-primary/5 px-8 py-6 text-center min-w-[220px] glow-border">
                <div className="font-semibold text-lg mb-3 text-gradient">LLMTrace</div>

                {/* Animated capability icons */}
                <div className="flex items-center justify-center gap-3">
                  {[
                    { Icon: Eye, label: "Inspect", delay: 0 },
                    { Icon: Shield, label: "Protect", delay: 0.3 },
                    { Icon: Lock, label: "Secure", delay: 0.6 },
                  ].map(({ Icon, label, delay }) => (
                    <motion.div
                      key={label}
                      className="flex flex-col items-center gap-1"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Threat intercepted indicator */}
                <motion.div
                  className="mt-3 flex items-center justify-center gap-1.5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] text-primary/80">threats blocked</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated connection line 2 */}
            <div className="relative w-28 h-12 flex items-center justify-center">
              <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-border/30" />
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`packet-out-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-accent/80"
                  style={{ left: 0 }}
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + i * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <ArrowRight className="relative z-10 h-4 w-4 text-accent/60" />
            </div>

            {/* LLM API */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative z-10 rounded-xl border border-border/50 bg-card px-8 py-6 text-center min-w-[180px]"
            >
              <div className="font-semibold text-lg mb-1">LLM API</div>
              <div className="font-mono text-xs text-muted-foreground">OpenAI, Anthropic, etc.</div>
            </motion.div>
          </div>

          {/* Mobile vertical flow */}
          <div className="flex md:hidden flex-col items-center gap-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border/50 bg-card px-8 py-5 text-center w-full max-w-[260px]"
            >
              <div className="font-semibold text-lg mb-1">Your App</div>
              <div className="font-mono text-xs text-muted-foreground">OpenAI SDK calls</div>
            </motion.div>

            {/* Vertical animated line */}
            <div className="relative w-px h-14 bg-border/30">
              {[0, 1].map((i) => (
                <motion.div
                  key={`v-packet-1-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-primary left-1/2 -translate-x-1/2"
                  animate={{
                    top: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[280px]"
            >
              <motion.div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 blur-xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-xl border border-primary/50 bg-primary/5 px-6 py-5 text-center glow-border">
                <div className="font-semibold text-lg mb-2 text-gradient">LLMTrace</div>
                <div className="flex items-center justify-center gap-3">
                  {[
                    { Icon: Eye, label: "Inspect" },
                    { Icon: Shield, label: "Protect" },
                    { Icon: Lock, label: "Secure" },
                  ].map(({ Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative w-px h-14 bg-border/30">
              {[0, 1].map((i) => (
                <motion.div
                  key={`v-packet-2-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-accent/80 left-1/2 -translate-x-1/2"
                  animate={{
                    top: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border/50 bg-card px-8 py-5 text-center w-full max-w-[260px]"
            >
              <div className="font-semibold text-lg mb-1">LLM API</div>
              <div className="font-mono text-xs text-muted-foreground">OpenAI, Anthropic, etc.</div>
            </motion.div>
          </div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm">
              One line change. <span className="text-primary">Full visibility.</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
