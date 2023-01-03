import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  items: MenuItem[] = [
    {
      label: 'Arbeitsplan',
      icon: 'pi pi-fw pi-calendar',
      routerLink: ['']
    },
    {
      label: 'Mitarbeiter',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/employees']
    }
  ];

}

