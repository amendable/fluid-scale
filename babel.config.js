module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ],
  "env": {
    "esm": {
      "presets": [["@babel/preset-env", { "modules": false }]],
      "plugins": [["@babel/plugin-transform-runtime", { "useESModules": true }]]
    }
  }
}
