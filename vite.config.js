import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            refresh: true,
            input: ["resources/sass/app.scss", "resources/js/app.js"],
        }),
    ],
});
