export interface InitialValues {
  salaryType: string,
  withoutNDFL: boolean,
  mounthlyCount: string,
  dailyCount: string,
  hourlyCount: string,
}

export const initialValues: InitialValues = {
  salaryType: 'mounthly',
  withoutNDFL: false,
  mounthlyCount: '0',
  dailyCount: '0',
  hourlyCount: '0',
}
