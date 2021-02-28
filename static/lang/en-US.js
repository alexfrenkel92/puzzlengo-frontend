export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        en: 'English',
        es: 'Espanol',
        confirm: 'Confirm',
        cancel: 'Cancel',
        withdraw: 'Withdraw',
        enroll: 'Enroll',
        date: 'Date',
        more_info: 'More info',
        description: 'Description',
        duration: 'Duration',
        payment: 'Payment'
      },
      menu: {
        dashboard: 'Dashboard',
        notifications: 'Notifications',
        login: 'Login',
        profiling: 'My Profiling',
        balance: 'Balance',
        settings: 'Settings',
        logout: 'Logout',
        header_light: 'light',
        header_dark: 'dark',
        header_language: 'language'
      },
      footer: {
        motto: 'Some motto xyz',
        about: 'About Us',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        faq: 'FAQ',
        gdpr: 'GDPR'
      },
      balance: {
        title: 'Spend your earned balance by buying <b>eGift Cards</b> or by <b>Donating</b> to charity projects.',
        eGift: {
          title: 'eGift cards mean instant delivery, a digital trail, and no need for inventory',
          description: '<li>Select a card from a brand</li><li>Select or provide an amount to spend</li><li>Fill in the recipient\'s name and e-mail address and add a message if you wish</li><li>In case you are buying for yourself, press the <b>Buying For Myself</b> button</li><li>Review your order then click on the <b>Buy Card</b> button</li><li>The recipient receives the Claim Code to active the eGift Card on the brand\'s page</li>',
          goto: 'Go to eGift cards'
        },
        charity: {
          title: 'Charity gift cards allow you, the gift giver to make a charitable donation to the gift card provider',
          description: '<li>Select a card from a non-profit card provider</li><li>Select the amount you want to donate to</li><li>Review your order</li><li>Click on the <b>Donate</b> button to finish</li>',
          goto: 'Go to Charity Cards'
        },
        spending: 'Spendings',
        name: 'Recipient\'s name:',
        email: 'Recipient\'s e-mail:',
        earning: 'Earnings',
        more_info: 'More info about'
      },
      dashboard: {
        online_title: 'Press Confirm to start the puzzle game. When finished, come back to check your game\'s status.',
        appointment_for: 'Please select an appointment for',
        your_appointment: 'Your appointment:',
        appointment: 'Please select an appointment',
        book: 'Book',
        location: 'Location :',
        available_title: 'Available puzzles to enroll',
        no_available: 'There are no puzzles available, check back later',
        puzzle_name: 'Puzzle name:',
        minutes: 'minutes',
        quota: 'Quota',
        completed_title: 'Completed puzzles',
        no_completed: 'No completed puzzles yet',
        complete_time: 'Completed on '
      },
      giftcards: {
        egift: 'eGift Card',
        amount: 'Amount',
        donate: 'Donate',
        buy: 'Buy Card',
        back: 'Back to Cards',
        disclaimer: 'Disclaimer',
        tango: 'Tango Cards',
        charity: 'Charity',
        choose_reward: 'Choose your reward below.',
        choose_donate: 'Choose to donate.',
        purchase_confirm: 'Thank you for your purchase',
        purchased_item: 'Purchased Item',
        amount_charged: 'Amount Charged',
        current_balance: 'Current Balance',
        claim_code: 'Claim Code',
        instruction: 'Redemption Instruction'
      },
      form: {
        email: 'E-mail',
        first_name: 'First Name',
        last_name: 'Last Name',
        age: 'Age',
        password: 'Password',
        sign_in_with: 'Sign in with',
        sign_in: 'Sign in',
        sign_up_with: 'Sign up with',
        sign_up: 'Sign up',
        pswd_forget: 'Forgot your password?',
        use_account: 'or use your account',
        fill_form: 'Or fill in and submit this form, and we’ll get back to you very soon.',
        start: 'Let’s get started',
        continue: 'Continue'
      },
      charts: {
        health: 'Health',
        activity: 'Activity',
        steps: 'Steps',
        heart_rate: 'Heart Rate',
        weekly_steps: 'Steps this week',
        weight: 'Weight',
        sleep: 'Sleep'
      },
      description: {
        title: 'How It Works'
      },
      landing: {
        registered: 'Already registered?',
        title: 'Puzzle\'n Go',
        description: 'Take part in engaging short games and earn credits'
      }
    })
  })
}
