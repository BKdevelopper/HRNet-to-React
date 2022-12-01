//function page
import { Link } from 'react-router-dom'
import dataMocked from '../mocks/user.json'
import { useState } from 'react'
import React, { lazy, Suspense } from 'react'

const Loader = () => <p>Loading...</p>
const DataTable = lazy(() => import('../components/listEmployee'))
function CreateEmployee() {
  const [Employees, setEmployees] = useState('')
  const localstorageData = JSON.parse(localStorage.getItem('employees'))
  let ListAllData = []
  if (localstorageData) {
    ListAllData = [...dataMocked, ...localstorageData]
  } else {
    ListAllData = [...dataMocked]
  }
  const SearchEmployees = (event) => {
    if (event.target.value.length >= 3) {
      const FilterResults = ListAllData.filter((user) => {
        return (
          user.lastname
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase()) ||
          user.firstname
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase()) ||
          user.department
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase()) ||
          user.zipcode
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase())
        )
      })
      setEmployees(FilterResults)
    } else {
      setEmployees(ListAllData)
    }
  }
  return (
    <Suspense fallback={Loader()}>
      <main className="container_employee">
        <header className="container_employee_header">
          <h1 className="container_employee_title">Dashboard</h1>
          <input
            type="search"
            placeholder="Search employees..."
            className="container_employee_input"
            onChange={SearchEmployees}
          />
        </header>
        <p>{ListAllData.id}</p>
        <DataTable data={Employees || ListAllData} />
      </main>
    </Suspense>
  )
}
export default CreateEmployee
