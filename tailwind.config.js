module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // false or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
