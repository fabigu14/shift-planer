import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftTableComponent } from './components/shift-table/shift-table.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  { path: '', component: ShiftTableComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
