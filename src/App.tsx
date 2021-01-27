import React from 'react'
import { SalaryForm, initialValues } from './components/SalaryForm'

function App() {
  return (
    <div className='App container py-3'>
      <SalaryForm initialValues={initialValues} />
    </div>
  )
}

export default App
