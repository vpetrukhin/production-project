import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/**
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <Flex
            direction="column"
            {...otherProps}
            className={classNames('', {}, [className])}
        >
            {children}
        </Flex>
    );
};
