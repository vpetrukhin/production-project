import { classNames } from 'shared/lib/classNames/classNames';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <Flex
            direction='row'
            {...otherProps}
            className={classNames('', {}, [className])}
        >
            {children}
        </Flex>
    );
};