import ru from 'vuetify/lib/locale/ru';

export default {
  ...ru,
  locale: {
    switcherLabel: 'Выберите язык'
  },
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
      title: 'Добро пожаловать в SmartDesk!',
      subtitle: 'Пожалуйста, войдите в свою учетную запись и начните приключение',
      forgotPassLink: 'Забыли пароль?',
      formButton: 'ВОЙТИ',
      registerQuestion: 'Впервые на нашей платформе?',
      registerLink: 'Создать учетную запись',
    },
    register: {
      title: 'Приключение начинается здесь',
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
  sessionExpired: 'Текущая сессия истекла'
}
