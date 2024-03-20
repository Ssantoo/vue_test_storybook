module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],

  core: {
    builder: '@storybook/builder-webpack5'
  },

  docs: {
    autodocs: true
  }
}
