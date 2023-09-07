import { useState } from 'react';
import { Icon as IconDeprecated } from '../deprecated/Icon/Icon';
import { HStack } from '../Stack';
import StarIconOld from '@/shared/assets/icons/star.svg';
import StarIconNew from '@/shared/assets/icons/newStar.svg';
import StarIconFilledNew from '@/shared/assets/icons/newStarFilled.svg';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Icon } from '../redesigned/Icon';

interface StarRatingProps {
    className?: string;
    selectedStars?: number;
    size?: number;
    onSelect?: (starsCount: number) => void;
}

const ratingCounts = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
    const { onSelect, selectedStars = 0, size = 30 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
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

    const getIsHovered = (starsCount: number) =>
        currentStarsCount >= starsCount;

    return (
        <HStack gap="4">
            {ratingCounts.map((starsCount) => {
                const commonProps = {
                    key: starsCount,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starsCount),
                    onClick: handleStarClick(starsCount),
                    width: size,
                    height: size,
                };
                return (
                    <ToggleFeatureComponent
                        name="isRedesignEnable"
                        key={starsCount}
                        on={
                            <Icon
                                Svg={
                                    getIsHovered(starsCount)
                                        ? StarIconFilledNew
                                        : StarIconNew
                                }
                                {...commonProps}
                            />
                        }
                        off={
                            <IconDeprecated
                                Svg={StarIconOld}
                                color={
                                    getIsHovered(starsCount)
                                        ? 'primary'
                                        : 'clear'
                                }
                                {...commonProps}
                            />
                        }
                    />
                );
            })}
        </HStack>
    );
};
