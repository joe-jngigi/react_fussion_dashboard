import React from 'react'

import { LineChart, ChartsHeader, Header } from '../../components'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 rounded-3xl bg-white dark:bg-main-dark-bg'>
      <Header category='Chart' title='Inflation Rate'/>
      <div className="w-full">
        <LineChart/>
      </div>

    </div>
  )
}

export default Line