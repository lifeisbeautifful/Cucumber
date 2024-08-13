const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Cucumber playwright report",
  pageTitle: "Allo project",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "127",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Allo shop" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" }
    ],
  },
});