import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  toggleMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  setToggleMenu(value: boolean) {
    this.toggleMenu = value;
  }

}
