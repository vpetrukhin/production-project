import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticalTextBlockComponent } from './ArticalTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleTextBlock } from '../../model/types/article';
import { BlockType } from '../../model/const/articleConsts';

const textBlock = {
    id: '34',
    type: BlockType.TEXT,
    title: 'Title',
    paragraphs: [
        'Paragraph 1',
        'Paragraph 2',
    ],
} as ArticleTextBlock;

export default {
    title: 'entity/Article/ArticalTextBlockComponent',
    component: ArticalTextBlockComponent,
} as ComponentMeta<typeof ArticalTextBlockComponent>;

const Template: ComponentStory<typeof ArticalTextBlockComponent> = (args) => <ArticalTextBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    block: textBlock,
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    block: textBlock,
};