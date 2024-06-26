import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { MenubarModule } from 'primeng/menubar';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { AppComponent } from './app.component';
import { ShiftTableComponent } from './components/shift-table/shift-table.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmployeDialogComponent } from './components/employees/employe-dialog/employe-dialog.component';
import { environment } from '../environments/environment';
import { ConfirmDeleteDialogComponent } from './shared/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { ShiftDialogComponent } from './components/shift-table/shift-dialog/shift-dialog.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { AuthComponent } from './components/auth/auth.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    ShiftTableComponent,
    EmployeesComponent,
    MenuComponent,
    EmployeDialogComponent,
    ConfirmDeleteDialogComponent,
    ShiftDialogComponent,
    MomentPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ChipModule,
    MenubarModule,
    DynamicDialogModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
