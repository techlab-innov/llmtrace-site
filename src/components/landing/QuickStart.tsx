import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { INSTALL_COMMAND } from "@/constants/urls";

const installMethods = {
  cargo: [
    { step: "Install Proxy", code: "cargo install llmtrace" },
    { step: "Run Proxy", code: "llmtrace-proxy --config config.yaml" },
    { step: "Point App", code: 'client = OpenAI(base_url="http://localhost:8080/v1")' },
  ],
  docker: [
    { step: "Pull Image", code: "docker pull ghcr.io/epappas/llmtrace-proxy:latest" },
    { step: "Run Container", code: "docker run -p 8080:8080 ghcr.io/epappas/llmtrace-proxy" },
    { step: "Point App", code: 'client = OpenAI(base_url="http://localhost:8080/v1")' },
  ],
  python: [
    { step: "Install SDK", code: "pip install llmtracing" },
    { step: "Configure", code: "import llmtrace\ntracer = llmtrace.configure({\"enable_security\": True})" },
    { step: "Trace Calls", code: 'span = tracer.start_span("chat", "openai", "gpt-4")' },
  ],
};

const QuickStart = () => {
  const [selectedMethod, setSelectedMethod] = useState<"cargo" | "docker" | "python">("cargo");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select the text so the user can copy manually
    }
  };

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
            Install with a single command.
          </p>
        </motion.div>

        {/* One-liner install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-primary/30 bg-card glow-border overflow-hidden mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              Quick Install
            </span>
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="flex-1 overflow-x-auto font-mono text-sm md:text-base text-foreground/90 bg-background/50 rounded-lg px-4 py-3 border border-border/30">
              <span className="text-primary mr-2">$</span>
              {INSTALL_COMMAND}
            </div>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 p-2.5 rounded-lg border border-border/50 bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label={copied ? "Copied!" : "Copy install command"}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Separator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            or choose a method
          </span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Installation method tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-6"
        >
          {[
            { key: "cargo" as const, label: "Cargo (Rust)" },
            { key: "docker" as const, label: "Docker" },
            { key: "python" as const, label: "Python SDK" },
          ].map((method) => (
            <button
              key={method.key}
              onClick={() => setSelectedMethod(method.key)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                selectedMethod === method.key
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "bg-card text-muted-foreground border border-border/50 hover:border-border"
              }`}
            >
              {method.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={selectedMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-border/50 bg-card glow-border overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="p-6 space-y-6">
            {installMethods[selectedMethod].map((s, i) => (
              <div key={i}>
                <div className="font-mono text-xs text-primary/70 mb-2 uppercase tracking-wider">
                  {`# Step ${i + 1}: ${s.step}`}
                </div>
                <div className="font-mono text-sm md:text-base text-foreground/90 bg-background/50 rounded-lg px-4 py-3 border border-border/30 whitespace-pre-wrap">
                  <span className="text-primary mr-2">$</span>{s.code}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Package Registry Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a
              href="https://crates.io/crates/llmtrace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Rust (crates.io)
            </a>
            <a
              href="https://pypi.org/project/llmtracing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Python (PyPI)
            </a>
            <a
              href="https://github.com/epappas/llmtrace/pkgs/container/llmtrace-proxy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Docker (GHCR)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStart;
