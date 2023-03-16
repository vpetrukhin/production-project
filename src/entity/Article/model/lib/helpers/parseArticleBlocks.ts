import { BlockType } from '../../const/articleConsts';
import { ArticleBlock, ArticleFormBlocks } from '../../types/article';

export const parseArticleTextBlocksToString = (blocks: ArticleBlock[]) => {
    return blocks.map((block) => {
        if (block.type === BlockType.TEXT) {
            return {
                ...block,
                paragraphs: Array.isArray(block.paragraphs)
                    ? block.paragraphs.join(`\n`)
                    : block.paragraphs,
            };
        } else {
            return block;
        }
    })
}



export const parseArticleTextBlocksToArray = (blocks: ArticleFormBlocks): ArticleBlock[] => {
    return blocks.map(block => {
        if (block.type === BlockType.TEXT) {
            return {
                ...block,
                paragraphs: block.paragraphs.split('\n'),
            }
        } else {
            return block;
        }
    })
}