module.exports = {
    themes: [
        { input: "scss/rounded.scss", output: "dist/style/rounded.css" },
        { input: "scss/underline.scss", output: "dist/style/underline.css" },
        { input: "scss/gray.scss", output: "dist/style/gray.css" },
        { input: "scss/light.scss", output: "dist/style/light.css" },
        { input: "scss/dark.scss", output: "dist/style/dark.css" },
        { input: "scss/basic.scss", output: "dist/style/basic.css" },
    ],
    options: {
        // You can add SASS compiler options here if needed
        style: "compressed", // Optional: minify output
        sourceMap: false, // Optional: generate source maps
    },
};
