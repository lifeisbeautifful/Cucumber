export {};

declare global {
    namespace NodeJS {
        interface ENV {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "staging" | "prode" | "test",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}