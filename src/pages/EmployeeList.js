//function page
import { Link } from 'react-router-dom'
import dataMocked from '../mocks/user.json'
import { useState } from 'react'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
const Loader = () => <p>Loading...</p>
const DataTable = lazy(() => import('../components/listEmployee'))
function CreateEmployee() {
  const allEmployeeData = useSelector((state) => state.allEmployee)
  console.log(allEmployeeData)
  console.log(dataMocked)

  const [Employees, setEmployees] = useState('')
  let ListAllData = []
  if (allEmployeeData) {
    ListAllData = [...dataMocked]
    ListAllData.push(allEmployeeData)
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
          <Link to="/" className="container_employee_title">
            Dashboard
          </Link>

          <input
            type="search"
            placeholder="Search employees..."
            className="container_employee_input"
            onChange={SearchEmployees}
          />
        </header>
        <p>{ListAllData.id}</p>
        <div className="container_employee_list">
          <DataTable data={Employees || ListAllData} />
        </div>
      </main>
    </Suspense>
  )
}
export default CreateEmployee
