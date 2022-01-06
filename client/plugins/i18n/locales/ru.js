import ru from 'vuetify/lib/locale/ru';

export default {
  ...ru,
  locale: {
    switcherLabel: 'Выберите язык'
  },
  auth: {
    emailLabel: 'Электронная почта',
    secretLabel: 'Пароль',
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
        names: 'Имя должно быть больше 3 и меньше 15 символов и содержать только буквы'
      },
    },
    login: {
      title: 'Добро пожаловать в Smart Bot!',
      subtitle: 'Пожалуйста, войдите в свою учетную запись и начните приключение',
      forgotPassLink: 'Забыли пароль?',
      formButton: 'ВОЙТИ',
      registerQuestion: 'Впервые на нашей платформе?',
      registerLink: 'Создать учетную запись',
    },
    register: {
      title: 'Приключение начинается здесь',
      subtitle: 'Сделайте управление своим приложением простым и увлекательным!',
      terms: {
        agree: 'Я принимаю',
        text: 'условия и конфиденциальность'
      },
      formButton: 'РЕГИСТРАЦИЯ',
      loginQuestion: 'Уже есть учетная запись?',
      loginLink: 'Авторизация'
    },
    passwordReset: {
      title: 'Форма восстановления пароля',
      subtitle: 'Укажите свой Email и мы пришлем вам новый пароль',
      cancelBtn: 'Отмена',
      submitBtn: 'Восстановить'
    }
  },
  error: {
    title: 'Страница не найдена',
    subtitle: 'мы не можем найти страницу, которую вы ищете',
    btnText: 'домашняя страница'
  }
}
