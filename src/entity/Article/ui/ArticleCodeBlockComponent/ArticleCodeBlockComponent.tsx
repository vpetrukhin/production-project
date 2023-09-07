import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (
    props: ArticleCodeBlockComponentProps,
) => {
    const { className, block } = props;

    return (
        <Code
            text={block.code}
            className={className}
        />
    );
};
