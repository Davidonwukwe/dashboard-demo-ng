import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-cards',
  templateUrl: './statistics-cards.component.html',
  styleUrls: ['./statistics-cards.component.scss']
})
export class StatisticsCardsComponent implements OnInit {

  statistics = [
    {
      name: 'Pending Requests',
      value: 1478286,
      percentage: 4.07,
      icon: 'assets/icons/pendingRequestsCircle.png',
      growth: 'up'
    },
    {
      name: 'Approved Requests',
      value: 478520,
      percentage: 0.24,
      icon: 'assets/icons/approvedRequestsCircle.png',
      growth: 'up'

    },
    {
      name: 'Total Agents',
      value: 154872,
      percentage: 1.64,
      icon: 'assets/icons/totalAgentsCircle.png',
      growth: 'down'

    },
    {
      name: 'Total Users',
      value: 167,
      percentage: 0.00,
      icon: 'assets/icons/totalUsersCircle.png',
      growth: 'neutral'

    },

  ];

  constructor() { }

  ngOnInit(): void {
  }
  numberWithSpaces (x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

}
