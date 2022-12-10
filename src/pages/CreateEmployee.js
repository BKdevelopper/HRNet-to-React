//function page
import { Link } from 'react-router-dom'
import { useState } from 'react'
import mockedStates from '../mocks/states'
import { typedepartment } from '../mocks/type'
import { useRef } from 'react'
import ModalComponent from 'modal-component-library-p14'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function EmployeesList() {
  const [ModalIsVisible, setModalIsVisible] = useState(false)
  const [datebirth, setdatebirth] = useState('')
  const [StartDATE, setStartDATE] = useState('')

  const closeModal = () => {
    setModalIsVisible(false)
  }
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
    const dateStart = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear()}`
    const birthDate = `${
      datebirth.getMonth() + 1
    }/${datebirth.getDate()}/${datebirth.getFullYear()}`
    const newEmployee = {
      firstname: FormComplete.firstname.current.value,
      lastname: FormComplete.lastname.current.value,
      startDate: dateStart,
      department: FormComplete.department.current.value,
      dateOfBirth: birthDate,
      street: FormComplete.street.current.value,
      city: FormComplete.city.current.value,
      state: FormComplete.state.current.value,
      zipcode: FormComplete.zipcode.current.value,
    }
    e.preventDefault()
    console.log(newEmployee)
    employees.push(newEmployee)
    localStorage.setItem('employees', JSON.stringify(employees))
    //window.location.reload()
  }
  const handledatebirth = (date) => {
    setdatebirth(date)
  }
  const handlestartdate = (date) => {
    setStartDATE(date)
  }
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <h2>Create Employee</h2>
        <form onSubmit={AddEmployeeForm} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" ref={FormComplete.firstname} />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" ref={FormComplete.lastname} />
          <div className="form__date">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              id="date-of-birth"
              selected={datebirth}
              name="date-of-birth"
              onChange={(date) => handledatebirth(date)}
              placeholderText="mm/dd/yyyy"
            />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              id="start-date"
              selected={StartDATE}
              name="start-date"
              onChange={(date) => handlestartdate(date)}
              placeholderText="mm/dd/yyyy"
            />
          </div>

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
            {typedepartment.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              )
            })}
          </select>

          <button
            onClick={() => setModalIsVisible(true)}
            className="form__footer__btn"
            type="submit"
          >
            Save
          </button>
        </form>
        <Link to="/EmployeesList" className="link">
          Employees
        </Link>
      </div>
      <ModalComponent
        text="Employee Created!"
        closeButton={closeModal}
        visible={ModalIsVisible}
      />
    </>
  )
}
export default EmployeesList
