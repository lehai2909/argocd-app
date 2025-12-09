import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // provide Vitest globals like `describe`, `test`, `expect`
    globals: true,
    // use a browser-like environment so DOM testing library works
    environment: "jsdom",
    // run this setup file before the tests (loads jest-dom matchers)
    setupFiles: "./test/setupTests.js",
    // pick up test files under src/
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
  },
});
