const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#F1F4F8',
              '@menu-item-active-bg': '#FFB800',
              '@menu-item-font-size': 'Montserrat',
              '@menu-item-color': '#1E0D03',
              '@menu-inline-submenu-bg': '#FFB800',
              '@layout-header-background': '#FFFFF',
              '@layout-sider-background': '#FFFFF',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};