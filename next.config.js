/** @type {import('next').NextConfig} */
// webpack.config.js ou next.config.js, selon la configuration de votre projet
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/media/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};
