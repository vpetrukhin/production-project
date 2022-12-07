import { StateSchema } from '@/app/providers/Redux';
export const getAddCommentFormText = (state: StateSchema) => state.addCommentFrom?.text;