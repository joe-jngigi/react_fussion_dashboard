import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Selection,Search , Toolbar, Sort, Filter, Page, Edit, Inject} from '@syncfusion/ej2-react-grids'
import {customersData, customersGrid} from '../data/dummy';
import {Header} from '../components'
const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white '>
      <Header category = 'Page' title = 'Customers'/>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search', 'Delete']}
      editSettings={{allowDeleting: true, allowEditing:true}}
      width = 'auto'>
        <ColumnsDirective>
        {customersGrid.map((item,index) => (
          <ColumnDirective key = {index} {...item}/>
        ))}
        </ColumnsDirective>

        <Inject services = {[ Page, Search, Toolbar, Sort, Selection, Filter, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Customers