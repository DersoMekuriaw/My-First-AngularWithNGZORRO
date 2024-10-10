import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmentComponent } from './update-department.component';

describe('UpdateDepartmentComponent', () => {
  let component: UpdateDepartmentComponent;
  let fixture: ComponentFixture<UpdateDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDepartmentComponent]
    });
    fixture = TestBed.createComponent(UpdateDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
