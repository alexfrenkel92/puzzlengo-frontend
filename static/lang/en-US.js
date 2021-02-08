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
        contact_title: 'How we can help?',
        contact_subtitle:
          'Do you have any questions? Are you ready to reduce cost and create new revenue? Or you simply want to say hi? Drop us a message.',
        form_name: 'What is your name? *',
        form_email: 'What it your email? *',
        form_phone: 'What is your phone number?',
        form_company: 'What is your company?',
        form_message: 'Write your message here',
        form_terms: 'I have read and accept the Terms of',
        form_privacy: 'Service & Privacy Policy *',
        form_send: 'Send Message',
        accept: 'Accept',
        en: 'English',
        es: 'Espanol',
        // hu: 'Magyar',
        notif_msg: 'This is an example of a message that is commonly used for important information to visitors or users. Please click the button beside to close this message.'
      },
      menu: {
        header_home: 'Home',
        header_dashboard: 'Dashboard',
        header_helpcenter: 'Help Center',
        header_menu3: 'menu 3',
        header_menu4: 'menu 4',
        header_static: 'Contact',
        header_language: 'language',
        header_theme: 'theme mode',
        header_dark: 'dark',
        header_light: 'light'
      }
    })
  })
}
