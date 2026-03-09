module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './index.html',
        './src/**/*.js',
        './src/**/*.hbs', // si usas Handlebars
      ],
      safelist: [/^btn/, /^active/], // clases que quieres mantener
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};