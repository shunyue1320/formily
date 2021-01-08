import { resolve } from 'path'
export default {
  mode: 'site',
  logo:
    '//img.alicdn.com/imgextra/i2/O1CN01f6Rq6L1IRCkxNn447_!!6000000000889-55-tps-600-89.svg',
  title: 'Formily',
  hash: true,
  favicon:
    '//img.alicdn.com/imgextra/i4/O1CN013NYra11W7sfH2qLl8_!!6000000002742-55-tps-360-360.svg',
  outputPath: './doc-site',
  navs: [
    {
      title: 'Ant Design',
      path: '/components',
    },
    {
      title: '主站',
      path: '//formilyjs.org',
    },
    {
      title: 'GITHUB',
      path: '//github.com/alibaba/formily',
    },
  ],
  styles: [
    `.__dumi-default-navbar-logo{
      height: 60px !important;
      width: 135px !important;
      padding-left:0 !important;
      color: transparent !important;
    }
    nav a{
      text-decoration: none !important;
    }
    `,
  ],
}
