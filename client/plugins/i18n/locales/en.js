import en from 'vuetify/lib/locale/en';

export default {
  ...en,
  locale: {
    switcherLabel: 'Select locale'
  },
  terms: 'Terms',
  privacyPolicy: 'Privacy Policy',
  auth: {
    emailLabel: 'Email',
    secretLabel: 'Password',
    confirmSecretLabel: 'Confirm Password',
    namesLabel: {
      first: 'Firstname',
      last: 'Lastname'
    },
    socialDelimiter: 'or',
    validate: {
      required: 'Field is required!',
      termsAndPolicy: 'You must accept the terms and privacy policy',
      format: {
        email: 'Invalid email format',
        secret: 'Invalid password format: must contains from 6 to 14 characters, at least 1 upper case letter and 1 digit',
        confirmSecret: 'Password and password confirm doesn\'t match',
        names: 'Names must be more than 3 and less than 15 characters. Contains only letters'
      },
    },
    login: {
      title: 'Login',
      subtitle: 'Please sign-in to your account',
      forgotPassLink: 'Forgot Password?',
      formButton: 'LOGIN',
      registerQuestion: 'New on our platform?',
      registerLink: 'Create an account',
    },
    register: {
      title: 'Welcome to SmartDesk!',
      subtitle: 'Make your app management easy and fun!',
      terms: 'I agree to privacy policy & terms',
      formButton: 'REGISTER',
      loginQuestion: 'Already have an account?',
      loginLink: 'Sign in instead'
    },
    registerComplete: {
      title: 'Register Completion',
      subtitle: 'Almost there :) Create your password',
      submitBtn: 'Create password',
      loaderTitle: 'Checking service token. Please, stand by...'
    },
    passwordReset: {
      title: 'Password Recovery',
      subtitle: 'Enter your Email and we will send you a new password',
      cancelBtn: 'Cancel',
      submitBtn: 'Recovery',
    },
    passwordChange: {
      title: 'Password Change',
      subtitle: 'Create New Password',
      submitBtn: 'Create password',
      loaderTitle: 'Checking service token. Please, stand by...'
    }
  },
  error: {
    title: 'Page Not Found',
    subtitle: 'we couldn\'t find the page you are looking for',
    btnText: 'back to home'
  },
  sessionExpired: 'Current Session Expired',
  pageTitles: {
    landing: 'SmartDesk |> Messengers Bots Contructor',
    error: 'SmartDesk |> Error Page',
    app: {
      login: 'SmartDesk |> Login Page',
      register: 'SmartDesk |> Register Page',
      registerComplete: 'SmartDesk |> Register Completion',
      passwordReset: 'SmartDesk |> Password Recovery',
      passwordCreate: 'SmartDesk |> Password Create',
      dashboard: 'SmartDesk |> Dashboard Page',
    },
    admin: {}
  },
  landing: {
    header: {
      links: {
        advantages: 'Features',
        solutions: 'Solutions',
        prices: 'Pricing',
        login: 'Log In',
        register: 'Register'
      }
    },
    footer: {
      copyright: 'All rights reserved',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    welcomeBlock: {
      title: 'Smart messenger bot builder: <br> <b>Telegram</b>, <b>Viber</b>, <b>Facebook</b>',
      subtitle: 'Create bots of any complexity for popular messengers <b class="text-decoration-underline">without programming</b>',
      button: 'Try for free'
    },
    descriptionBlock: {
      chatbot: {
        title: 'What is a chatbot?',
        text: '<b>Chatbot</b> - is a small mobile app in Messenger.<br>You can use it as an additional channel or completely replace the mobile application with it. No installation required. <br> If your client already has a messenger, he can find your bot and start using it right away.'
      },
      opportunity: {
        title: 'Chatbot Features',
        subtitle: 'Virtually limitless: From product/service navigation to complete automation of your business.',
        automation: {
          title: 'Automation',
          text: 'Create new sales channels and serve your customers without involving additional people.<br>The robot will guide the customer through the necessary steps.'
        },
        support: {
          title: 'Support',
          text: 'Easily organize live chat support with helpdesk tools.'
        },
        sales: {
          title: 'Sales',
          text: 'Sell the most popular products in a few clicks.'
        },
        communication: {
          title: 'Communication',
          text: 'Communicate with your customers where it suits them.'
        },
        marketing: {
          title: 'Marketing',
          text: 'Test your hypotheses quickly.'
        },
        efficiency: {
          title: 'Efficiency',
          text: 'Create powerful tools and applications for your business and office.'
        },
      }
    },
    advantagesBlock: {
      title: 'Smart bot for all messengers',
      subtitle: 'Write a bot once and easily integrate with all popular messengers'
    },
    solutionsBlock: {
      title: 'All the necessary tools',
      subtitle: 'To create a functional chatbot and messenger marketing',
      visualRedactor: {
        title: 'Create a chatbot in a visual editor',
        text: 'You don\'t need to know programming to create a bot in SmartDesk. Come up with a script for the bot, select the necessary components and link them together in a visual editor.'
      },
      chatCommunicate: {
        title: 'Chat with clients',
        text: 'Keep customers even if the bot fails. Find out about errors in time and process all requests. And you can always see the history of communication between a person and a bot. <br><br> Connect your employee to communication with the bot-client - so that you do not lose the client and do not allow negativity if the bot did not understand anything.'
      },
      gatherStatistics: {
        title: 'Get statistics',
        text: 'Make decisions based on numbers. The statistics section will give useful information about users. You can always track at what stage users are lost and improve the bot. That way you won\'t waste your advertising budget.'
      },
      segmentUsers: {
        title: 'Segment users and send campaigns',
        text: 'Don\'t wait for the user to message the bot again - send it news and offers. Group users with tags and send only interesting content.<br><br>You can send a newsletter right now, at a scheduled time, after a specified time after an action, or set up periodic sending.'
      },
    },
    pricingBlock: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that best suits your needs.',
      paymentPeriodTitle: 'Choose payment period. <br> <div class="d-flex flex-row justify-center text-decoration-underline" style="font-size: 14px"><b>P.S. Annual payment is 20% cheaper</b></div>',
      paymentPeriodYear: 'Year',
      paymentPeriodMonth: 'Month',
      selectBots: 'Select the messengers that will participate in the project',
      plans: {
        features: {
          demoBotsTitle: 'Number of demo bots',
          realBotsTitle: 'Number of production bots',
          botsConstructor: 'Graphic Designer',
          botsAnalytics: 'Analytics Section',
          customersMailing: 'Mailing to customers',
          accessTransfer: 'Bot Access Transfer',
          employeesAccess: 'Employees access',
          crmIntegrations: 'CRM Integrations'
        },
        selectButton: 'Choose plan',
        padawan: {
          title: 'Padawan',
          description: 'Price for beginners'
        },
        jedi: {
          title: 'Jedi',
          description: 'Tariff for sure'
        },
        yoda: {
          title: 'Master Yoda',
          description: 'Tariff for professionals'
        }
      },
      newbieOffer: {
        title: 'Can\'t decide on a subscription plan?',
        description: 'Choose a free plan to create an unlimited number of demo bots. <br> This plan is the best option for creating bots for a presentation or your training :)',
        button: 'Try for free'
      }
    }
  }
}
