import React from 'react'
import {GoDotFill} from 'react-icons/go'

import { Stacked,  Button, } from '../components'

import { earningData, } from '../data/dummy'

import { useStateContext } from '../contexts/context_provider'
const Administrator = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='mt-12'>
      {/* SECTION ONE */}
      <div className="flex justify-center flex-wrap lg:flex-nowrap">

        {/* TOP_INFORMATION */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$480,000</p>
            </div>
          </div>
          <div className='mt-6'>
              <Button color = 'white' bgColor = {currentColor} text = 'Download' borderRadius = '10px' size='md'/>
          </div>
        </div>

        {/* CARDS */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) =>(
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl" key={item.title}>
              <button type='button' style={{color:item.iconColor, background:item.iconBg}}
              className = 'text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className="mt-3">
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm mt-1 text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/*  */}
      {/* SECTION TWO */}
      {/* SYNCFUSSION USAGE: REVENUE */}
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="bg-white rounded-2xl md:w-780 dark:text-gray-200 dark:bg-secondary-dark-bg">

          {/* HEADING SECTION */}
          <div className="flex justify-between">
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className="flex gap-4 items-center">
              <p className="flex gap-2 text-gray-600 hover:drop-shadow-xl items-center">
                <span><GoDotFill/></span>
                <span>Expense</span>
              </p>
              <p className="flex gap-2 text-green-600 hover:drop-shadow-xl items-center">
                <span><GoDotFill/></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* BODY SECTION */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">

              {/* BUDGET */}
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$120,000</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>13%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              {/* EXPENSES */}
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$34,089</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              {/* CHART ONE */}
              <div className="mt-5">
                {/*<SparkLine currentColor = {currentColor} id = 'line-sparkline' type = 'line' height = '80px' 
	    width = '250px' data = {SparklineAreaData} color = {currentColor} />*/}
              </div>

              {/* BUTTON */}
              <div className='mt-10'>
                <Button color = 'white' bgColor = {currentColor} text = 'Download Report' borderRadius = '10px'/>
              </div>
            </div>

            {/* RIGHT-SIDE CHART */}
            <div>
              <Stacked  height = '360px' width = '320px' />
            </div>
          </div>
        </div>
      </div>
    </div>   
)}
export default Administrator
