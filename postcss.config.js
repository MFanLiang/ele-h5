module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowerserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
    'postcss-pxtorem': {
      // 根节点的 fontsize
      rootValue: 16,
      // 需要修改的css属性为全部修改
      propList: ['*'],
      selectorBlackList: [':root'],
    },
  },
};
