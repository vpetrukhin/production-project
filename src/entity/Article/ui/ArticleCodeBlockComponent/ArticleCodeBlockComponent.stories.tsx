import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { BlockType } from '../../model/const/articleConsts';

export default {
    title: 'entity/article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    block: {
        id: '12',
        type: BlockType.CODE,
        code: `
export default {
    title: 'entity/article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
} as ComponentMeta<typeof ArticleCodeBlockComponent>;
        `,
    }
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    block: {
        id: '12',
        type: BlockType.CODE,
        code: `
export default {
    title: 'entity/article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
} as ComponentMeta<typeof ArticleCodeBlockComponent>;
        `,
    }
};