import { Component, OnInit, Inject } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DepartmentInterface } from '../Department';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {

  selectedDepartment: DepartmentInterface[] = [];
  isLeafCheck: DepartmentInterface[] = [];
  isLeaf: boolean = true;
  selectedDeptId: any;
  selectedDeptName: any;
  noOfChild: number = 0;
  children: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private dialog: MatDialogRef<DeleteDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {

    // Retrives only the department which have id = this.data.departmentcode
    this.router.navigate (['/tableview']);
    this.service.GetAll().subscribe((returnedValue)=>{
      this.isLeafCheck = returnedValue;
      for (let leaf of this.isLeafCheck){
        if(leaf.id == this.data.departmentcode){
          this.selectedDeptId = leaf.deptId;
          this.selectedDeptName = leaf.deptName;
        }
      }
    });
      
    // Checks whether the selected department is leaf or parent.
    this.service.GetAll().subscribe((returnedValue)=>{
      this.isLeafCheck = returnedValue;
      for (let leaf of this.isLeafCheck){
        if(leaf.managerId == this.selectedDeptId){
          this.children.push(leaf.deptName);
          this.isLeaf = false;
        }
      }
    });
    
  }

  submitForm() {
        this.service.deleteDepartment(this.data.departmentcode).subscribe( res => {
          alert("Delete Successfully");
          this.router.navigate(['/tableview']);
          this.dialog.close();
        });
  }
}
