import { FeatureFlags } from '@/shared/lib/featureFlags/types';
import { UserRoles } from '../const/userConsts';
import { JsonSettings } from './JsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoles[];
    featuresFlags?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    isAuth: boolean;
    userInfo?: User;

    _inited: boolean;
}
