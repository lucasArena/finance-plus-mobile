const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config")

const defaultConfig = getDefaultConfig(__dirname)
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    // If you use react-native-svg-transformer (for SVG assets)
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    alias: {
      "@": "./src",
    },
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
}

module.exports = mergeConfig(defaultConfig, config)
