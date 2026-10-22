import { defineConfig } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT ?? 4321);
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${port}`;

export default defineConfig({
  testDir: "./tests/visual",
  snapshotDir: "./tests/visual/__screenshots__",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    viewport: { width: 1280, height: 720 },
    locale: "de-DE",
    colorScheme: "light",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npm run dev -- --host 0.0.0.0 --port ${port} --ignore-lock`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
