import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-requests',
  templateUrl: './recent-requests.component.html',
  styleUrls: ['./recent-requests.component.scss']
})
export class RecentRequestsComponent implements OnInit {

  data = [
    {
      name: 'Michael Olu',
      email: 'michael@mail.com',
      type: 'New Agent',
      status: 'pending',
      date: '23/04/18',
      icon: './assets/images/michael.png'
    },
    {
      name: 'Michael Olu',
      email: 'michael@mail.com',
      type: 'New Agent',
      status: 'pending',
      date: '23/04/18',
      icon: './assets/images/michael.png'
    },
    {
      name: 'Michael Olu',
      email: 'michael@mail.com',
      type: 'New Agent',
      status: 'pending',
      date: '23/04/18',
      icon: './assets/images/michael.png'
    },
    {
      name: 'Michael Olu',
      email: 'michael@mail.com',
      type: 'New Agent',
      status: 'pending',
      date: '23/04/18',
      icon: './assets/images/michael.png'
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
