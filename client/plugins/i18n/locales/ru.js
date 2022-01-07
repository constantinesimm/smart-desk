import ru from 'vuetify/lib/locale/ru';

export default {
  ...ru,
  locale: {
    switcherLabel: 'Выберите язык'
  },
  terms: 'Пользовательское соглашение',
  privacyPolicy: 'Политика конфиденциальности',
  auth: {
    emailLabel: 'Электронная почта',
    secretLabel: 'Пароль',
    confirmSecretLabel: 'Подтверждение пароля',
    namesLabel: {
      first: 'Имя',
      last: 'Фамилия'
    },
    socialDelimiter: 'или',
    validate: {
      required: 'Поле обязательно!',
      termsAndPolicy: 'Нужно принять условия и политику конфиденциальности',
      format: {
        email: 'Неверный формат электронной почты',
        secret: 'Неверный формат пароля: должен содержать от 6 до 14 символов, минимум 1 букву верхнего регистра и 1 цифру',
        confirmSecret: 'Пароль и подтверждение пароля не совпадают',
        names: 'Имя должно быть больше 3 и меньше 15 символов и содержать только буквы'
      },
    },
    login: {
      title: 'Авторизация',
      subtitle: 'Пожалуйста, войдите в свою учетную запись',
      forgotPassLink: 'Забыли пароль?',
      formButton: 'ВОЙТИ',
      registerQuestion: 'Впервые на нашей платформе?',
      registerLink: 'Создать учетную запись',
    },
    register: {
      title: 'Добро пожаловать в SmartDesk!',
      subtitle: 'Сделайте управление своим приложением простым и увлекательным!',
      terms: 'Я принимаю условия и политику конфиденциальности',
      formButton: 'РЕГИСТРАЦИЯ',
      loginQuestion: 'Уже есть учетная запись?',
      loginLink: 'Авторизация'
    },
    registerComplete: {
      title: 'Завершение регистрации',
      subtitle: 'Почти готово :) Создайте свой пароль',
      submitBtn: 'Завершить',
      loaderTitle: 'Проверка токена доступа. Пожалуйста, подождите...'
    },
    passwordReset: {
      title: 'Восстановление пароля',
      subtitle: 'Укажите свой Email и мы пришлем вам новый пароль',
      cancelBtn: 'Отмена',
      submitBtn: 'Восстановить'
    },
    passwordChange: {
      title: 'Смена пароля',
      subtitle: 'Создайте свой пароль',
      submitBtn: 'Сохранить',
      loaderTitle: 'Проверка токена доступа. Пожалуйста, подождите...'
    }
  },
  error: {
    title: 'Страница не найдена',
    subtitle: 'мы не можем найти страницу, которую вы ищете',
    btnText: 'домашняя страница'
  },
  sessionExpired: 'Текущая сессия истекла',
  pageTitles: {
    landing: 'SmartDesk |> Конструктор ботов для мессенджеров',
    error: 'SmartDesk |> Страница ошибки',
    app: {
      login: 'SmartDesk |> Авторизация',
      register: 'SmartDesk |> Регистрация',
      registerComplete: 'SmartDesk |> Завершение Регистрации',
      passwordReset: 'SmartDesk |> Восстановление пароля',
      passwordCreate: 'SmartDesk |> Создание пароля',
      dashboard: 'SmartDesk |> Информационная панель',
    },
    admin: {}
  }
}
