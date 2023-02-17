import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

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
      routerLink: ['/shiftplan']
    },
    {
      label: 'Mitarbeiter',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/employees']
    }
  ];

  constructor(private authService: AuthService,) {}

  logout() {
    this.authService.logout()
  }
}

