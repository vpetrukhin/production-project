import ArrowTop from '@/shared/assets/icons/arrowTop.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
    const { className } = props;

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <Icon
            Svg={ArrowTop}
            width={32}
            height={32}
            clickable
            onClick={handleScrollToTop}
        />
    );
};
