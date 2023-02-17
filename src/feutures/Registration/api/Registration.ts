import { rtkApi } from '@/shared/api/rtkAPi';

const RegistrationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        reg: build.mutation<{ message: string }, any>({
            query: (body) => ({
                url: 'reg',
                method: 'POST',
                body,
            }),
        })
    })
});

export const { useRegMutation } = RegistrationApi;