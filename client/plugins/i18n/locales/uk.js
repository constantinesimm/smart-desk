import uk from 'vuetify/lib/locale/uk';

export default {
  ...uk,
  locale: {
    switcherLabel: 'Виберіть мову'
  },
  terms: 'Угода Користувача',
  privacyPolicy: 'Політика конфіденційності',
  auth: {
    emailLabel: 'Електронна пошта',
    secretLabel: 'Пароль',
    confirmSecretLabel: 'Підтвердження пароля',
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
        confirmSecret: 'Пароль і підтвердження пароля не збігаються',
        names: 'Ім\'я має бути більше ніж 3 і менше ніж 15 символів. Містить лише літери'
      },
    },
    login: {
      title: 'Авторизацiя',
      subtitle: 'Увійдіть у свій обліковий запис',
      forgotPassLink: 'Забули пароль?',
      formButton: 'УВІЙТИ',
      registerQuestion: 'Вперше на нашій платформі?',
      registerLink: 'Створити обліковий запис',
    },
    register: {
      title: 'Вітаємо у SmartDesk!',
      subtitle: 'Зробіть керування вашим додатком легким і цікавим!',
      terms: 'Погоджуюсь з умовами i полiтикою конфiденцiйностi',
      formButton: 'РЕЄСТРАЦІЯ',
      loginQuestion: 'Уже маєте обліковий запис?',
      loginLink: 'Авторизуватись'
    },
    registerComplete: {
      title: 'Завершення реєстрації',
      subtitle: 'Майже готово :) Створіть свій пароль',
      submitBtn: 'Завершити',
      loaderTitle: 'Перевірка токену доступу. Будь ласка, зачекайте...'
    },
    passwordReset: {
      title: 'Відновлення пароля',
      subtitle: 'Вкажіть свій Email і ми надішлемо вам новий пароль',
      cancelBtn: 'Скасувати',
      submitBtn: 'Відновити'
    },
    passwordChange: {
      title: 'Зміна пароля',
      subtitle: 'Створіть свій пароль',
      submitBtn: 'Зберегти',
      loaderTitle: 'Перевірка токену доступу. Будь ласка, зачекайте...'
    }
  },
  error: {
    title: 'Сторінку не знайдено',
    subtitle: 'ми не змогли знайти сторінку, яку ви шукаєте',
    btnText: 'домашня сторінка'
  },
  sessionExpired: 'Поточний сеанс закінчився',
  pageTitles: {
    landing: 'SmartDesk |> Конструктор ботів месенджерів',
    error: 'SmartDesk |> Сторінка помилок',
    app: {
      login: 'SmartDesk |> Авторизацiя',
      register: 'SmartDesk |> Реєстрація',
      registerComplete: 'SmartDesk |> Завершення реєстрації',
      passwordReset: 'SmartDesk |> Відновлення паролю',
      passwordCreate: 'SmartDesk |> Створити пароль',
      dashboard: 'SmartDesk |> Iнформаційна панель',
    },
    admin: {}
  }
}
