import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'

import { Stacked, Pie, Button, SparkLine } from '../components'

import { earningData, SparklineAreaData,ecomPieChartData } from '../data/dummy'

import { useStateContext } from '../contexts/context_provider'
const Administrator = () => {
  const [activeMenu] = useStateContext();
  return (
    <div className='mt-12'>
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <div className="">
          
        </div>

      </div>
    </div>
  )
}

export default Administrator
