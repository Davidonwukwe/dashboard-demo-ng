import { Component, OnInit } from '@angular/core';
// import {EChartsOption} from "echarts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

chartOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
};

  // @ts-ignore
  // chartOptions: EChartsOption = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     splitLine: {
  //       show: true,
  //       lineStyle: {
  //         color: ['#EEEEEE'],
  //         width: 1,
  //         type: 'solid'
  //       }
  //
  //     },
  //     axisLine: {show: false},
  //     boundaryGap: false
  //   },
  //   yAxis: {
  //     type: 'value',
  //     min: 0,
  //     max: 100,
  //     splitNumber: 6,
  //     tooltip: {show: true},
  //     splitLine: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: true,
  //       lineStyle: {
  //         color: '#EEEEEE;',
  //         width: 1,
  //         type: 'dashed'
  //       }
  //     },
  //     axisPointer: [{show: true}]
  //   },
  //   series: [
  //     {
  //       data: [26, 50, 25, 25, 50, 22, 10, 25],
  //       type: 'line',
  //       smooth: true
  //     },
  //     {
  //       data: [10, 25, 23, 25, 5, 27, 40, 30, 50],
  //       type: 'line',
  //       smooth: true
  //     },
  //
  //
  //   ]
  // };


  constructor() { }

  ngOnInit(): void {
  }

}
