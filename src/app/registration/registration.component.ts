import { Guid } from 'guid-typescript';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DepartmentInterface } from '../Department';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  size: NzButtonSize = 'large';
  selectedValue = 'null';
  departments: DepartmentInterface[] = [];
  newDeptId: Guid;
  isDuplicated: boolean = false;
  newDeptExist: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    this.newDeptId = Guid.create(); // GUID Generator
  }

  ngOnInit(): void {
    this.service
      .GetAll()
      .subscribe((returnedValue) => (this.departments = returnedValue));

    this.validateForm = this.fb.group({
      deptId: [this.newDeptId, [Validators.required]],
      deptName: [null, [Validators.required]],
      deptDesc: [null, [Validators.required]],
      managerId: ["null"],
    });
  }
  resetForm(): void {
    this.validateForm.reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.service.GetAll().subscribe((returnedValue) => {
        this.newDeptExist = returnedValue;
        for (let leaf of this.newDeptExist) {
          if (leaf.deptName == this.validateForm.value.deptName) {
            this.isDuplicated = true;
          }else{
            this.isDuplicated = false;
          }
        }
      });

      // if (this.isDuplicated == true) {
        this.service
          .AddDepartment(this.validateForm.value)
          .subscribe((res: any) => {
            alert('Register Successfully');
            this.router.navigate(['/tableview']);
          });
      // } else {
      //   alert(
      //     this.validateForm.value.deptName +
      //       ' is already exist in currect management.'
      //   );
      // }
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
