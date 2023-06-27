# ProdApp

## Описание проекта

Данный проект представляет собой сайт со статьями.
Ссылка на [проект](https://prodapp.ru)

## Используемый стэк технологий

### Разработка:

-   React
-   Typescript
-   SCSS

### Сборщики:

-   Webpack
-   Vite

### Тестирование

-   Jest
-   React Testing Library
-   Storybook
-   Loki
-   Cypress.

### Архитектура

Проект написан с использованием методологии [Feuture Slice Design](https://feature-sliced.design/ru/).

### Бэкенд

В качестве бэкенда использовался [json-server](https://github.com/typicode/json-server).

### Переводы

Проект поддерживает русский и английский языки. Это реализовано с помощью [i18next](https://www.i18next.com/)

---

### Фича флаги

С фича флагами нужно работать через функцию toggleFeature
Пример использования:

```
    const rating = toggleFeature({
        name: 'isArticleRatingCardEnabled',
        on: () => <ArticleRating articleId={id} />,
        off: () => <Card><Text text={t('reiting-skoro-budet-dostupen')} /></Card>
    })
```

## Запуск проекта

Для запуска проекта выполнить команды: <br>

```bash
    npm install
    npm start:dev или start:dev:vite
```

## Скрипты

-   `npm run build:prod` - сборка в prod режиме
-   `build:dev` - сборка в dev режиме
-   `start`- запуск dev-сервера
-   `start:backend`- запуск бэкенда
-   `start:vite` - запуск dev-сервера с помощью vite
-   `start:dev` - запуск dev-сервера и бэкенда параллельно
-   `start:dev:vite` - запуск dev-сервера с помощью vite и бэкенда параллельно
-   `lint:ts` - запуск eslint
-   `lint:ts:fix` - запуск eslint c автоматическим исправлением
-   `lint:scss` - запуск stylelint
-   `lint:scss:fix` - запуск eslint c автоматическим исправлением
-   `test:unit` - запуск unit тестов
-   `test:e2e` - запуск e2e тестирования
-   `test:ui` - запуск скриншотного тестирования
-   `test:ui:ok` - approve скриншотов
-   `test:ui:report` - генерация html отчета скриншотных тестов
-   `test:ui:report:json` - генерация json отчета скриншотных тестов
-   `test:ui:report:html` - генерация html отчета из json отчета скриншотных тестов
-   `test:ui:ci` - запуск скриншотного тестирования в ci пайплайне
-   `storybook` - запуск storybook
-   `storybook:build` - запуск сборки storybook
-   `generate:slice` - генерация слайса
-   `prepare` - пре-коммит хуки

## Сущности

-   [**Article**](/src/entity/Article/README.md)
-   [**Comment**](/src/entity/Comment/README.md)
-   [**Country**](/src/entity/Country/README.md)
-   [**Currency**](/src/entity/Currency/README.md)
-   [**Notification**](/src/entity/Notification/README.md)
-   [**Profile**](/src/entity/Profile/README.md)
-   [**Rating**](/src/entity/Rating/README.md)
-   [**User**](/src/entity/User/README.md)

## Фичи

-   [**ArticleRating**](/src/feutures/ArticleRating/README.md) - Рейтинг статьи
-   [**ArticleRecomendationList**](/src/feutures/ArticleRecomendationList/README.md) - Список рекомендованных статей
-   [**ArticlesViewSelector**](/src/feutures/ArticlesViewSelector/README.md) - Переключатель вида списка статей
-   [**AuthByUserName**](/src/feutures/AuthByUserName/README.md) - Авторизация по username
-   [**AvatarDropdown**](/src/feutures/AvatarDropdown/README.md) - Выпадающее окно открывающее по клику на аватар пользователя
-   [**EditableProfileCard**](/src/feutures/EditableProfileCard/README.md) - Карточка пользователя с возможностью редактирования информации
-   [**LangSwitcher**](/src/feutures/LangSwitcher/README.md) - Переключатель языка
-   [**NotificationButton**](/src/feutures/NotificationButton/README.md) - Кнопка открытия списка уведомлений
-   [**ProfileRating**](/src/feutures/ProfileRating/README.md) - Рейтинг статьи
-   [**ThemeSwitcher**](/src/feutures/ThemeSwitcher/README.md) - Переключатель темы
-   [**addComment**](/src/feutures/addComment/README.md) - Форма добавления комментария
-   [**scrollStorage**](/src/feutures/scrollStorage/README.md) - Отслеживание позиции скролла
