import { defineConfig } from "astro/config";

export default defineConfig({
    server: {
        port: 3000,
        site: 'https://ShadyAV.github.io',
        base: '/astro-landing',
    },
});
