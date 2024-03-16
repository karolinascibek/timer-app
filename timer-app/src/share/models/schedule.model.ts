
export type ScheduleDate = { hour: number, minutes: number};

export type Schedule =  {
  dateStart: Date,
  dateStop: Date,
  description: string,
  title: string,
  isCompleted: boolean
}
