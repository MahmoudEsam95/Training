import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-Chart',
  templateUrl: './Chart.component.html',
  styleUrls: ['./Chart.component.css']
})
export class ChartComponent implements OnInit {

  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;


  constructor(private myService: MyServiceService, private router: Router) {}

  ngOnInit() {

    this.myService.StudentCountByClass().subscribe((data: any) => {
      this.renderChart1(data.labels, data.values);});
    // this.myService.StudentCountByClass1().subscribe((data: any) => {
    //   this.renderChart2(data.labels, data.values); });
     this.myService.StudentCountByStage().subscribe((data: any) => {
      this.renderChart3(data.labels, data.values); });
    //  this.myService.StudentCountByStage1().subscribe((data: any) => {
    //   this.renderChart4(data.labels, data.values); });

  }


  renderChart1(labels: string[], values: number[]) {
    this.chart1 = new Chart('canvas1', {
      plugins: [ChartDataLabels],
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Num Students in Classes',
            data: values,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            display: true,
            color: 'black',
            font: {
              weight: 'lighter',
              size: 10,
            },
          },
        }}
    });
  }


  // renderChart2(labels: string[], values: number[]) {
  //   this.chart2 = new Chart('canvas2', {
  //     plugins: [ChartDataLabels],
  //     type: 'doughnut',
  //     data: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: 'Num Students in Stage',
  //           data: values,
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       plugins: {
  //         datalabels: {
  //           display: true,
  //           color: 'black',
  //           font: {
  //             weight: 'bold',
  //             size: 10,
  //           },
  //         },
  //       }}
  //   });
  // }

  renderChart3(labels: string[], values: number[]) {
    this.chart1 = new Chart('canvas3', {
      plugins: [ChartDataLabels],
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Num Students in Stage',
            data: values,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            display: true,
            color: 'black',
            font: {
              weight: 'bolder',
              size: 25,
            },
          },
        }}
    });
  }

  // renderChart4(labels: string[], values: number[]) {
  //   this.chart1 = new Chart('canvas4', {
  //     plugins: [ChartDataLabels],
  //     type: 'bar',
  //     data: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: 'Salary Amount',
  //           data: values,
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       plugins: {
  //         datalabels: {
  //           display: true,
  //           color: 'black',
  //           font: {
  //             weight: 'lighter',
  //             size: 10,
  //           },
  //         },
  //       }}
  //   });
  // }

















}
