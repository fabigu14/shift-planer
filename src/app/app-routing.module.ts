import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftTableComponent } from './components/shift-table/shift-table.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'shiftplan', component: ShiftTableComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
