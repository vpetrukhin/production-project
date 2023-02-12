import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';


export const [useProfileValidateErrors, getProfileValidateErrors] = buildSelector((state: StateSchema) => state?.profile?.validateErrors);