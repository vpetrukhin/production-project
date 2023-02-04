# ProdApp

## Описание проекта

Данный проект представляет собой сайт со статьями. 
Ссылка на [проект](https://prodapp.ru)

## Используемый стэк технологий
### Разработка:
* React
* Typescript
* SCSS
### Сборщики:
* Webpack
* Vite
### Тестирование
* Jest
* React Testing Library
* Storybook
* Loki
* Cypress.
### Архитектура
Проект написан с использованием методологии [Feuture Slice Design](https://feature-sliced.design/ru/).
### Бэкенд
В качестве бэкенда использовался [json-server](https://github.com/typicode/json-server).
### Переводы
Проект поддерживает русский и английский языки. Это реализовано с помощью [i18next](https://www.i18next.com/)
***

## Запуск проекта
Для запуска проекта выполнить команды: <br>
```bash
    npm install
    npm start:dev или start:dev:vite
```

## Скрипты
- `npm run build:prod` - сборка в prod режиме
- `build:dev` - сборка в dev режиме
- `start`- запуск dev-сервера
- `start:backend`- запуск бэкенда
- `start:vite` - запуск dev-сервера с помощью vite
- `start:dev` - запуск dev-сервера и бэкенда параллельно
- `start:dev:vite` - запуск dev-сервера с помощью vite и бэкенда параллельно
- `lint:ts` - запуск eslint
- `lint:ts:fix` - запуск eslint c автоматическим исправлением
- `lint:scss` - запуск stylelint
- `lint:scss:fix` - запуск eslint c автоматическим исправлением
- `test:unit` - запуск unit тестов 
- `test:e2e` - запуск e2e тестирования 
- `test:ui` - запуск скриншотного тестирования
- `test:ui:ok` - approve скриншотов
- `test:ui:report` - генерация html отчета скриншотных тестов
- `test:ui:report:json` - генерация json отчета скриншотных тестов
- `test:ui:report:html` - генерация html отчета из json отчета скриншотных тестов
- `test:ui:ci` - запуск скриншотного тестирования в ci пайплайне
- `storybook` - запуск storybook
- `storybook:build` - запуск сборки storybook
- `generate:slice` - генерация слайса
- `prepare` - пре-коммит хуки

## Сущности
- [__Article__](/src/entity/Article/README.md)
- [__Comment__](/src/entity/Comment/README.md) 
- [__Country__](/src/entity/Country/README.md)
- [__Currency__](/src/entity/Currency/README.md)
- [__Notification__](/src/entity/Notification/README.md)
- [__Profile__](/src/entity/Profile/README.md)
- [__Rating__](/src/entity/Rating/README.md)
- [__User__](/src/entity/User/README.md)

## Фичи
- [__ArticleRating__](/src/feutures/ArticleRating/README.md) - Рейтинг статьи
- [__ArticleRecomendationList__](/src/feutures/ArticleRecomendationList/README.md) - Список рекомендованных статей 
- [__ArticlesViewSelector__](/src/feutures/ArticlesViewSelector/README.md) - Переключатель вида списка статей
- [__AuthByUserName__](/src/feutures/AuthByUserName/README.md) - Авторизация по username
- [__AvatarDropdown__](/src/feutures/AvatarDropdown/README.md) - Выпадающее окно открывающее по клику на аватар пользователя
- [__EditableProfileCard__](/src/feutures/EditableProfileCard/README.md) - Карточка пользователя с возможностью редактирования информации
- [__LangSwitcher__](/src/feutures/LangSwitcher/README.md) - Переключатель языка
- [__NotificationButton__](/src/feutures/NotificationButton/README.md) - Кнопка открытия списка уведомлений
- [__ProfileRating__](/src/feutures/ProfileRating/README.md) - Рейтинг статьи
- [__ThemeSwitcher__](/src/feutures/ThemeSwitcher/README.md) - Переключатель темы
- [__addComment__](/src/feutures/addComment/README.md) - Форма добавления комментария
- [__scrollStorage__](/src/feutures/scrollStorage/README.md) - Отслеживание позиции скролла
