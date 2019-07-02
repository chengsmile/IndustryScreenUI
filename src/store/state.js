import storage from 'utils/storage'
import chartThemeColors from 'constants/chartThemeColors'
export default {
  menus: storage.get('menus') || [], // 所有导航
  originMenus: storage.get('originMenus') || [], // 原始从后台请求的菜单
  // nav: storage.nav || [], // 一级导航
  activeMenu: storage.get('activeMenu') || [], // 二级导航
  title: storage.get('title') || '工业互联网安全态势',
  bg: storage.get('bg') || 'bg',
  theme: storage.get('theme') || 'skin-blue',
  tColors: storage.get('tColors') || chartThemeColors['skin-blue'],
  count: storage.get('count') || 0,
  workspaceHeight: storage.get('workspaceHeight') || 0
}
