import en from 'vuetify/lib/locale/en';

export default {
  ...en,
  locale: {
    switcherLabel: 'Select locale'
  },
  auth: {
    emailLabel: 'Email',
    secretLabel: 'Password',
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
        names: 'Names must be more than 3 and less than 15 characters. Contains only letters'
      },
    },
    login: {
      title: 'Welcome to Smart Bot!',
      subtitle: 'Please sign-in to your account and start the adventure',
      forgotPassLink: 'Forgot Password?',
      formButton: 'LOGIN',
      registerQuestion: 'New on our platform?',
      registerLink: 'Create an account',
    },
    register: {
      title: 'Adventure starts here',
      subtitle: 'Make your app management easy and fun!',
      terms: {
        agree: 'I agree to',
        text: 'privacy policy & terms'
      },
      formButton: 'REGISTER',
      loginQuestion: 'Already have an account?',
      loginLink: 'Sign in instead'
    },
    passwordReset: {
      title: 'Password Recovery Form',
      subtitle: 'Enter your Email and we will send you a new password',
      cancelBtn: 'Cancel',
      submitBtn: 'Recovery'
    }
  },
  error: {
    title: 'Page Not Found',
    subtitle: 'we couldn\'t find the page you are looking for',
    btnText: 'back to home'
  }
}
