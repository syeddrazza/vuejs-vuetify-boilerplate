import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

const themeConfig = {
  app: {
    name: 'American Express Saudi Arabia – Online Application',
    logo: require('@/assets/images/logos/logo-amex.png'),
    isDark: false,
    isRtl: false,
    contentLayoutNav: 'vertical', // vertical, horizontal
    routeTransition: 'scroll-x-transition', // https://vuetifyjs.com/en/styles/transitions/#api
    // ! `semi-dark` isn't available for horizontal nav menu
    skinVariant: 'default', // default, bordered, semi-dark
    contentWidth: 'boxed',
  },
  menu: {
    isMenuHidden: false,
    isVerticalNavMini: false,
    verticalMenuAccordion: true,
    groupChildIcon: mdiCheckboxBlankCircleOutline,
    horizontalNavMenuGroupOpenOnHover: true,
  },
  appBar: {
    /*
    ! In Content Layout Horizontal Nav type `hidden` value won't work
    ! In Content Layout Horizontal Nav type value of `type` will affect both Appbar and Horizontal Navigation Menu
    */
    type: 'fixed', // fixed, static, hidden
    isBlurred: true,
  },
  footer: {
    type: 'static', // fixed, static, hidden
    title: 'American Express Company',
    link: 'https://www.americanexpress.com.sa/',
  },
  themes: {
    light: {
      primary: '#006fcf',
      accent: '#0d6efd',
      secondary: '#00175a',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
    dark: {
      primary: '#006fcf',
      accent: '#0d6efd',
      secondary: '#8A8D93',
      success: '#56CA00',
      info: '#16B1FF',
      warning: '#FFB400',
      error: '#FF4C51',
    },
  },
}

export default themeConfig
