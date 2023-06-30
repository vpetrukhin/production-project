import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
    (state: StateSchema) => state.user.userInfo?.jsonSettings ?? {},
);
