const tailwindcss = require("tailwindcss");

module.exports = {
    style: {
        postOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        }
    }
}