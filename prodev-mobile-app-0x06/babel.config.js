MediaSourceHandle.exports = function (api) {
  api.catch(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
