import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    selectedStars?: number;
    size?: number;
    onSelect?: (starsCount: number) => void
}

const ratingCounts = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
    const { onSelect, selectedStars = 0, size = 30 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(!!selectedStars);

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) setCurrentStarsCount(0);
    };

    const handleStarClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const getIsHovered = (starsCount: number) => currentStarsCount >= starsCount;

    return (
        <HStack gap='4' >
            {ratingCounts.map(starsCount => (
                <Icon
                    Svg={StarIcon}
                    color={getIsHovered(starsCount) ? 'primary' : 'clear'}
                    key={starsCount}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starsCount)}
                    onClick={handleStarClick(starsCount)}
                    width={size}
                    height={size}
                />
            ))}
        </HStack>
    );
};