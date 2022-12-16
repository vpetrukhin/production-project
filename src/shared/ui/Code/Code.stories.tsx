import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: `
        import { ComponentStory, ComponentMeta } from '@storybook/react';

        import { Code } from './Code';
        import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
        import { Theme } from 'app/providers/theme';

    export default {
        title: 'shared/Code',
        component: Code,
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
`
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    text: `
        import { ComponentStory, ComponentMeta } from '@storybook/react';

        import { Code } from './Code';
        import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
        import { Theme } from 'app/providers/theme';

    export default {
        title: 'shared/Code',
        component: Code,
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
`
};