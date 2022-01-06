import uk from 'vuetify/lib/locale/uk';

export default {
  ...uk,
  locale: {
    switcherLabel: 'Виберіть мову'
  },
  auth: {
    emailLabel: 'Електронна пошта',
    secretLabel: 'Пароль',
    namesLabel: {
      first: 'Ім\'я',
      last: 'Прізвище'
    },
    socialDelimiter: 'або',
    validate: {
      required: 'Поле обов\'язкове!',
      termsAndPolicy: 'Потрібно прийняти умови та політику конфіденційності',
      format: {
        email: 'Помилковий формат електронної пошти',
        secret: 'Помилковий формат пароля: повинен містити від 6 до 14 символів, принаймні 1 літеру верхнього регістру та 1 цифру',
        names: 'Ім\'я має бути більше ніж 3 і менше ніж 15 символів. Містить лише літери'
      },
    },
    login: {
      title: 'Ласкаво просимо до Smart Bot!',
      subtitle: 'Увійдіть у свій обліковий запис і розпочніть пригоду',
      forgotPassLink: 'Забули пароль?',
      formButton: 'УВІЙТИ',
      registerQuestion: 'Вперше на нашій платформі?',
      registerLink: 'Створити обліковий запис',
    },
    register: {
      title: 'Пригоди починаються тут',
      subtitle: 'Зробіть керування вашим додатком легким і цікавим!',
      terms: {
        agree: 'Погоджуюсь з ',
        text: 'умовами i конфiденцiйнiстю'
      },
      formButton: 'РЕЄСТРАЦІЯ',
      loginQuestion: 'Уже маєте обліковий запис?',
      loginLink: 'Авторизуватись'
    },
    passwordReset: {
      title: 'Форма відновлення пароля',
      subtitle: 'Вкажіть свій Email і ми надішлемо вам новий пароль',
      cancelBtn: 'Скасувати',
      submitBtn: 'Відновити'
    }
  },
  error: {
    title: 'Сторінку не знайдено',
    subtitle: 'ми не змогли знайти сторінку, яку ви шукаєте',
    btnText: 'домашня сторінка'
  }
}
