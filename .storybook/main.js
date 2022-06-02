module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-preset-less',
    // {
    //   name: 'storybook-preset-less',
    //   options: {
    //     cssLoaderOptions: {
    //        modules: true,
    //        localIdentName: '[name]__[local]--[hash:base64:5]',
    //     },
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         strictMath: false,
    //         noIeCompat: true,
    //         relativeUrls: false,
    //       },
    //     },
    //   }
    // },
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react"
}