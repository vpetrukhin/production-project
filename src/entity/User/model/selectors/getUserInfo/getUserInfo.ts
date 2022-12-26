import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useUserInfo, getUserInfo] = buildSelector((state: StateSchema) => state.user.userInfo);