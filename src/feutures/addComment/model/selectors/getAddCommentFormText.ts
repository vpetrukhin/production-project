import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useAddCommentFormText, getAddCommentFormText] = buildSelector((state: StateSchema) => state.addCommentFrom?.text);