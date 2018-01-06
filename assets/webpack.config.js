let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Bundle/PredictionIoDemoBundle/Resources/public/build/')
    .setPublicPath('/bundles/endroidpredictioniodemo/build')
    .setManifestKeyPrefix('/build')
    .cleanupOutputBeforeBuild()
    .createSharedEntry('base', './src/Bundle/PredictionIoDemoBundle/Resources/public/src/js/base.js')
    .addEntry('recommendation', './src/Bundle/PredictionIoDemoBundle/Resources/public/src/js/recommendation.js')
    .autoProvidejQuery()
    .enableReactPreset()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();