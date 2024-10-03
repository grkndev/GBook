const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("md", "mdx");
config.transformer.babelTransformerPath = require.resolve("./transformer.js");

module.exports = withNativeWind(config, { input: './global.css' });
