import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, data, color, type, currentColor }) => {
	return (
		<div>
			<SparklineComponent
				id={id}
				height={height}
				weidth={width}
				lineWidth={1}
				valueType="Numeric"
				fill={color}
				border={{ width: 2, color: currentColor }}
				dataSource={data}
				xName="x"
				yName="y"
				type={type}
			>
				<Inject services={[SparklineTooltip]} />
			</SparklineComponent>
		</div>
	)
}

export default SparkLine;