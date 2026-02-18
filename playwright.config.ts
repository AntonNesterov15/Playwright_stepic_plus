import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests', // Директория с тестами.
  snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true, // Запуск тестов в параллельном режиме.
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, // Запрет на оставление тестов с test.only.
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // Количество попыток перезапуска на CI.
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, // Количество воркеров для параллельных тестов.
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', // Репортер для генерации отчётов.
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000', // Базовый URL для тестов.

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure', // Скриншот только при сбое.
    trace: 'on-first-retry', // Формирование trace при первом перезапуске.
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Конфигурация для Chrome.
    },

    // {
    //   name: 'firefox',await page.getByRole('link', { name: 'Get started' }).click();
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start', // Команда для запуска локального сервера.
  //   url: 'http://localhost:3000', // URL локального сервера.
  //   reuseExistingServer: !process.env.CI, // Повторное использование сервера.
  // },
});
