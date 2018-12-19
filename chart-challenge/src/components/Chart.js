import React, {Component} from 'react';
import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';


//This component creates the chart with a simple usage of chart.js 'https://www.chartjs.org/'
class Chart extends Component{

	constructor(props){
		super(props);

		this.state = {
			
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	}

	render(){
		return(
			<div className="chart">

				<Scatter
					data={this.props.chartData}
					width={100}
					height={31.5}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Data Chart',
							fontSize: 25
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition,
							fontFamily: 'Source Sans Pro'
						},
						tooltips: {
							backgroundColor: 'rgba(255, 99, 132, 1)'
						},
						scales: {
				            xAxes: [{
				                type: 'time',
				                time: {
				                    unit: 'second'
				                }
				            }]
				        }
					}}
				/>
			</div>
		)
	}
}

export default Chart;
















