const sass = require("sass");
const fs = require("fs");
const path = require("path");
const config = require("../sass.config.js");

function compileSass() {
    config.themes.forEach((theme) => {
        try {
            const result = sass.renderSync({
                file: theme.input,
                outFile: theme.output,
                ...config.options,
            });

            // Ensure output directory exists
            fs.mkdirSync(path.dirname(theme.output), { recursive: true });

            // Write compiled CSS
            fs.writeFileSync(theme.output, result.css);
            console.log(`Compiled ${theme.input} → ${theme.output}`);
        } catch (error) {
            console.error(`Error compiling ${theme.input}:`, error);
        }
    });
}

compileSass();
