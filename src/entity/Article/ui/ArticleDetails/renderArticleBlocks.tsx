import { BlockType } from '../../model/const/articleConsts';
import { ArticleBlock } from '../../model/types/article';
import { ArticalTextBlockComponent } from '../ArticalTextBlockComponent/ArticalTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import cls from './ArticleDetails.module.scss';

export const renderArticleBlocks = (block: ArticleBlock) => {
    switch (block.type) {
        case BlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case BlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case BlockType.TEXT:
            return (
                <ArticalTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
    }
};
