import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { sidebarData } from './sidebar-data';

// FontAwesome
import { faCoffee, faClose, faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms'), 
          style({opacity: 1})
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms'), 
          style({opacity: 0})
      ])
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if( this.screenWidth <= 748 ) {
      this.collapsed = false;
      this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  // FontAwesome 
  faCoffee = faCoffee;
  faClose = faClose;
  faBars = faBars;
  faRightFromBracket = faRightFromBracket;

  collapsed = false;
  screenWidth = 0;

  // Import sidebar links
  sidebarData = sidebarData;

  @Output() onToggleSidebar: EventEmitter<SidebarToggle> = new EventEmitter();
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidebar(): void {
    this.collapsed = this.collapsed;
    this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
