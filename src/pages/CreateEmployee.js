//function page
import { Link } from 'react-router-dom'
import mockedStates from '../mocks/states'
import { useRef } from 'react'
function EmployeesList() {
  const FormComplete = {
    dateOfBirth: useRef(),
    city: useRef(),
    department: useRef(),
    firstname: useRef(),
    lastname: useRef(),
    startDate: useRef(),
    state: useRef(),
    street: useRef(),
    zipcode: useRef(),
  }
  const AddEmployeeForm = (e) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    console.log(employees)
    const newEmployee = {
      firstname: FormComplete.firstname.current.value,
      lastname: FormComplete.lastname.current.value,
      startDate: FormComplete.startDate.current.value,
      department: FormComplete.department.current.value,
      dateOfBirth: FormComplete.dateOfBirth.current.value,
      street: FormComplete.street.current.value,
      city: FormComplete.city.current.value,
      state: FormComplete.state.current.value,
      zipcode: FormComplete.zipcode.current.value,
    }
    e.preventDefault()
    console.log(newEmployee)
    employees.push(newEmployee)
    localStorage.setItem('employees', JSON.stringify(employees))
    window.location.reload()
  }
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/EmployeesList">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={AddEmployeeForm} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" ref={FormComplete.firstname} />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" ref={FormComplete.lastname} />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            ref={FormComplete.dateOfBirth}
          />
          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="date" ref={FormComplete.startDate} />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" ref={FormComplete.street} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" ref={FormComplete.city} />

            <label htmlFor="state">State</label>
            <select
              name="state"
              className="form__section__input"
              ref={FormComplete.state}
            >
              {mockedStates.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" ref={FormComplete.zipcode} />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            ref={FormComplete.department}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button className="form__footer__btn" type="submit">
            Save
          </button>
        </form>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  )
}
export default EmployeesList
