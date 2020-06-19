module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
    "rules": {
        "no-mixed-spaces-and-tabs": 0, // disable rule
        "no-unused-vars":0 
    }
};
