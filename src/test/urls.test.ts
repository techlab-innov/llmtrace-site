import { describe, it, expect } from "vitest";
import { GITHUB_URL, TWITTER_URL } from "@/constants/urls";

describe("urls", () => {
  it("should export the correct GitHub URL", () => {
    expect(GITHUB_URL).toBe("https://github.com/epappas/llmtrace");
  });

  it("should export the correct Twitter URL", () => {
    expect(TWITTER_URL).toBe("http://twitter.com/llmtrace");
  });
});
