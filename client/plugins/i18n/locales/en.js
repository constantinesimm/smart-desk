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
  }
}
