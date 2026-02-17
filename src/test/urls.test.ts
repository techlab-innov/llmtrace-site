import { describe, it, expect } from "vitest";
import { GITHUB_URL, TWITTER_URL, INSTALL_SCRIPT_URL, INSTALL_COMMAND } from "@/constants/urls";

describe("urls", () => {
  it("should export the correct GitHub URL", () => {
    expect(GITHUB_URL).toBe("https://github.com/epappas/llmtrace");
  });

  it("should export the correct Twitter URL", () => {
    expect(TWITTER_URL).toBe("http://twitter.com/llmtrace");
  });

  it("should export the correct install script URL", () => {
    expect(INSTALL_SCRIPT_URL).toBe(
      "https://raw.githubusercontent.com/epappas/llmtrace/main/scripts/install.sh"
    );
  });

  it("should export the correct install command", () => {
    expect(INSTALL_COMMAND).toBe(
      "curl -sS https://raw.githubusercontent.com/epappas/llmtrace/main/scripts/install.sh | bash"
    );
  });
});
