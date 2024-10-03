// import upstreamTransformer from "@expo/metro-config/babel-transformer"
// import MdxTransformer from "@bacons/mdx/metro-transformer"

const upstreamTransformer = require("@expo/metro-config/babel-transformer");
const MdxTransformer = require("@bacons/mdx/metro-transformer");

module.exports.transform = async (props) => {
  // Then pass it to the upstream transformer.
  return upstreamTransformer.transform(
    // Transpile MDX first.
    await MdxTransformer.transform(props)
  );
};
