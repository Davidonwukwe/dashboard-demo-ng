import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-links',
  templateUrl: './side-bar-links.component.html',
  styleUrls: ['./side-bar-links.component.scss']
})
export class SideBarLinksComponent implements OnInit {
  links = [
    {
      text: 'Dashboard',
      icon: 'assets/icons/Home.png',
      focus: true
    },
    {
      text: 'Requests',
      icon: 'assets/icons/Requests.png',
      focus: false
    },
    {
      text: 'KYCs',
      icon: 'assets/icons/KYC.png',
      focus: false
    },
    {
      text: 'Reports',
      icon: 'assets/icons/Reports.png',
      focus: false
    },
    {
      text: 'Audit Trail',
      icon: 'assets/icons/AuditTrail.png',
      focus: false,
      hasDropdown: true
    },
    {
      text: 'User',
      icon: 'assets/icons/User.png',
      focus: false
    },
    {
      text: 'Setting',
      icon: 'assets/icons/Setting.png',
      focus: false
    },



  ]


  constructor() { }

  ngOnInit(): void {
  }

}
