import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDialogComponent } from './employe-dialog.component';

describe('NewEmployeDialogComponent', () => {
  let component: EmployeDialogComponent;
  let fixture: ComponentFixture<EmployeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
