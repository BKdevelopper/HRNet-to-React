export const GET_ALL_EMPLOYEE = 'GET_ALL_EMPLOYEE'

export const SetEmployee = (allEmployee) => ({
  type: GET_ALL_EMPLOYEE,
  payload: { allEmployee },
})
