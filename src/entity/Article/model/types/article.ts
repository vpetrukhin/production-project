import { User } from 'entity/User';
import { ArticleType, BlockType } from '../const/articleConsts';

export type OrderType = 'asc' | 'desc';

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