const createFile = require('./createFile');

const createStoryFile = (dir, layer, slice) => {
    const storyFileTemplate = 
`
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${slice} } from './${slice}';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '${layer}/${slice}',
    component: ${slice},
} as ComponentMeta<typeof ${slice}>;

const Template: ComponentStory<typeof ${slice}> = (args) => <${slice} {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {}`;

    createFile(dir, `${slice}.stories.tsx`, storyFileTemplate);
};

module.exports = createStoryFile;