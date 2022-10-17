import { LoginSchema } from './../../../../feutures/AuthByUserName';
import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema,
}