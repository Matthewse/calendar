import type { Dayjs } from 'dayjs';

export interface IEvent {
    date: Dayjs,
    name: string,
    startTime: Dayjs,
    endTime: Dayjs,
    notificationTime: Dayjs,
}