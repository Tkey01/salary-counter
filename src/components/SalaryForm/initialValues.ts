export interface InitialValues {
  salaryType: 'mounthly',
  withoutNDFL: false,
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
