module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        requireModule: ["ts-node/register"],
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: ["src/test/features/*.feature"],
        publishQuiet: true,
        dryRun: false,
        require: ["src/test/steps/*.ts", "src/hooks/hooks.ts"],
        format: [
            "progress-bar", 
            "html:test-results/cucumber-report.html", 
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
     },
     rerun: {
        requireModule: ["ts-node/register"],
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: ["src/test/steps/*.ts", "src/hooks/hooks.ts"],
        format: [
            "progress-bar", 
            "html:test-results/cucumber-report.html", 
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
     }
}
