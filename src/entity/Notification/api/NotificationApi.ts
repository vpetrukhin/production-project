import { rtkApi } from '@/shared/api/rtkAPi';
import { Notification } from '../model/types/notification';

const NotificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationList: build.query<Notification[], void>({
            query: () => ({
                url: '/notifications',
            }),
        })
    }),
    overrideExisting: false,
});

export const { useGetNotificationListQuery } = NotificationApi;