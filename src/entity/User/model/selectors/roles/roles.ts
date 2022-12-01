import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/Redux';
import { UserRoles } from '../../const/userConsts';

export const getUserRoles = (state: StateSchema) => state.user.userInfo?.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.ADMIN)));

export const getIsManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.MANAGER)));