export enum ArticleSortTypes {
    VIEWS = 'views',
    CREATED = 'createdAt'
}

export enum BlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

export enum ArticleType {
    All = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMY = 'ECONOMY',
}

export const ArticleTypeRus: Record<ArticleType, string> = {
    ALL: 'Все типы',
    ECONOMY: 'Экономика',
    IT: 'ИТ',
    SCIENCE: 'Наука'
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG'
}