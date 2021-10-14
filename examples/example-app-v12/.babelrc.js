module.exports = {
   // REQUIRED: without this the decorators will fail the template update
   //  - _appears_ like this gets picked up by toMatchInlineSnapshot()
   plugins: [
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      '@babel/plugin-proposal-class-properties',
    ],

  sourceMaps: 'inline',
  presets: [
    [
      '@babel/preset-env',
    ],
  ]
};
