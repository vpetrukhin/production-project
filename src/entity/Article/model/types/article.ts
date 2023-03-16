import { User } from '@/entity/User';
import { ArticleType, BlockType } from '../const/articleConsts';

export type OrderType = 'asc' | 'desc';

export interface ArticleTypeItem<T = string> {
    content: string;
    value: T;
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
    paragraphs: string[] | string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export type ArticleBlockItem<T> = T extends BlockType.CODE ? ArticleCodeBlock : T extends BlockType.IMAGE ? ArticleImageBlock : ArticleTextBlock;

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

export type ArticleBody = Omit<Article, 'id'>;

export type ArticleFormBlocks = Array<(ArticleCodeBlock | ArticleImageBlock | {
    paragraphs: string;
    type: BlockType.TEXT;
    title?: string | undefined;
    id: string;
})>;

export interface ArticleFormFields {
    title: string;
    subtitle: string;
    img: string;
    type: ArticleType;
    blocks: ArticleFormBlocks;
}