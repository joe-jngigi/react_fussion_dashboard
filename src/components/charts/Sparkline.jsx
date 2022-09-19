import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'


const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent id={id} height = {height} width = {width} lineWidth = {1} valueType = 'Numeric' fill={color} border = {{color:currentColor, width: 2}} dataSource = {data} type = {type} xName = 'x' yName='yval' tooltipSettings={{visible:true, format: '${X}: data ${y}', trackLineSettings:{visible:true}}}>
      <Inject services = {[SparklineTooltip]}/>
    </SparklineComponent>

      // <SparklineComponent
      //   id={id}
      //   height={height}
      //   width={width}
      //   lineWidth={1}
      //   valueType="Numeric"
      //   fill={color}y
      //   border={{ color: currentColor, width: 2 }}
      //   tooltipSettings={{
      //     visible: true,
          
      //     format: '${x} : data ${}',
      //     trackLineSettings: {
      //       visible: true,
      //     },
      //   }}
      //   markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      //   dataSource={data}
      //   xName="x"
      //   yName="y"
      //   type={type}
      // >
      //   <Inject services={[SparklineTooltip]} />
      // </SparklineComponent>
  )
}

export default SparkLine
