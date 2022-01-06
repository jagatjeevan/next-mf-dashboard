const { withModuleFederation } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./mario": "./components/mario",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  }
};
