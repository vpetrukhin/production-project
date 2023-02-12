# Сущность Article

## Описание
Представляет собой статью

## Components
 - **ArticalTextBlockComponent** - текстовый блок статьи
 - **ArticleCodeBlockComponent** - блок с программным кодом
 - **ArticleImageBlockComponent** - блок с изображением
 - **ArticleDetails** - статья
 - **ArticleItem** - элемент в списке статей
 - **ArticleList** - список статей

## Public API
### Типы
    ArticleSchema - интерфейс слайса для StateSchema
    OrderType - тип сортировки
    Article - интерфейс статьи
### Константы
    ArticleView - виды элемента статьи
    BlockType - типы составных блоков статьи
    ArticleType - типы статей 
    ArticleSortTypes - типы сортировки статей
### Селекторы
    getArticleData - селектор для получения контента статьи
    useArticleData - хук для получения контента статьи
    useCanEdit - хук для получения флага возможности редактирования
### Components
    ArticleDetails - компонент статьи
    ArticleList - компонент списка статей