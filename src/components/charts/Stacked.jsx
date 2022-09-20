import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, StackingColumnSeries } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
// const Stacked = ({width, height}) => {
//   return (
class Stacked extends React.PureComponent {
  render() {
    const { height, width} = this.props;
    return(
    <ChartComponent width={width} height={height} id = 'charts' chartArea={{border:{width: 0}}} tooltip = {{enable:true}}
    primaryXAxis={stackedPrimaryXAxis} primaryYAxis = {stackedPrimaryYAxis}
    legendSettings ={{background:'white'}}>
      <Inject services = {[Legend, Category, Tooltip, StackingColumnSeries]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index)=> <SeriesDirective key = {index} {...item}/>)}
      </SeriesCollectionDirective>
      Check if it works
    </ChartComponent>
 ) }
}

export default Stacked
