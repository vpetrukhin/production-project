import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { BlockType } from '../../model/const/articleConsts';


export default {
    title: 'entity/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    block: {
        id: '12',
        type: BlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'title',
    }
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    block: {
        id: '12',
        type: BlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'title',
    }
};