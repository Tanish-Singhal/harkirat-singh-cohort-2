export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '../customVite.config.js',
      },
    },
  },

  addons: ['@storybook/addon-styling-webpack']
};