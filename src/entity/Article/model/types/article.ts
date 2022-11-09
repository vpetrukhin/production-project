import { User } from 'entity/User';

export enum BlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

export interface Block {
    id: string;
    type: string;
}

export interface ArticleCodeBlock extends Block {
    type: BlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends Block {
    type: BlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends Block {
    type: BlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMY = 'ECONOMY',
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}