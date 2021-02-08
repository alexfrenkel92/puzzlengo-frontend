export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'An error occurred on server',
        404: 'This page could not be found.',
        '404_subtitle':
          'You can either stay and chill here, or go back to the beginning.',
        back: 'back to home',
        error_without_status: 'An error occurred on the server',
        accept: 'Accept',
        en: 'English',
        es: 'Espanol',
        notif_msg: 'This is an example of a message that is commonly used for important information to visitors or users. Please click the button beside to close this message.'
      },
      menu: {
        header_index: 'Home',
        header_dashboard: 'Inspire',
        header_menu3: 'ask doctors',
        header_menu4: 'clinics',
        header_static: 'Contact',
        header_language: 'language',
        header_theme: 'theme mode',
        header_dark: 'dark',
        header_light: 'light'
      }
    })
  })
}
