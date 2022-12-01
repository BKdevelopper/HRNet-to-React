import React, { lazy, Suspense } from 'react'
const DataTable = lazy(() => import('react-data-table-component'))

const Loader = () => <p>Loading...</p>

const columns = [
  {
    name: 'First Name',
    selector: (r) => r.firstname,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (r) => r.lastname,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (r) => r.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (r) => r.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (r) => r.dateOfBirth,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (r) => r.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (r) => r.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (r) => r.state,
    sortable: true,
  },
  {
    name: 'Zipcode',
    selector: (r) => r.zipcode,
    sortable: true,
  },
]

export default function Table({ data }) {
  return (
    <Suspense fallback={Loader()}>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        striped
        paginationPerPage={10}
      ></DataTable>
    </Suspense>
  )
}
