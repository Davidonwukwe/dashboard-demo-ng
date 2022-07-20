import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  chartOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.setChartOptions();
  }

  setChartOptions() {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      xAxis: {
        type: 'category',
        data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },

      },
      yAxis: {
        type: 'value',
        splitNumber: 5,
        axisLabel: {
          textStyle: {
            color: 'white'
          },
          padding: [0, -12, 0, -12]
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            width: 1,
            type: 'dashed'
          }
        }
      },
      series: [
        {
          data: [0, 900, 700, 500, 1000, 70, 800],
          type: 'bar',
          barMaxWidth: 5,
          barGap: '0%',
          barCategoryGap: '0%',
          itemStyle: {color: 'white'}
        }
      ]
    };
  }

}
