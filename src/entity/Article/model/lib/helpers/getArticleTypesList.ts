import { ArticleTypeRus } from '../../const/articleConsts';
import { ArticleTypeItem } from './../../types/article';


export const getArticleTypesList = (): ArticleTypeItem[] => {
    return Object.entries(ArticleTypeRus).map(([value, content]) => ({
        content,
        value,
    }))
}