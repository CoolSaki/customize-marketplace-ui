/*eslint-env node*/
const fs = require('fs')

const path = require('path').resolve(__dirname, './storybook-static/index.html')

let html = fs.readFileSync(path, 'utf-8')

html = html.replace('Storybook', 'UI | Unicial')

fs.writeFileSync(path, html)

console.log(`Replaced "Storybook" with "UI | Unicial" in ${path}`)
