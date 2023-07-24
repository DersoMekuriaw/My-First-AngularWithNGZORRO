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
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  selectedDepartment: DepartmentInterface[] = [];
  hasChilderen: DepartmentInterface[] = [];
  selectedDeptName: any;
  selectedParentId: any;
  selectedParentName: any;
  selectedDeptDesc: any;
  selectedDeptId: any;
  children: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private dialog: MatDialogRef<ShowDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {

    // Retrives only the department which have id = this.data.departmentcode
    this.router.navigate (['/tableview']);
    this.service.GetAll().subscribe((returnedValue)=>{
      this.selectedDepartment = returnedValue
      for (let leaf of this.selectedDepartment){
        if(leaf.id == this.data.departmentcode){
          this.selectedParentId = leaf.managerId;
          this.selectedDeptName = leaf.deptName;
          this.selectedDeptId = leaf.deptId;
          this.selectedDeptDesc = leaf.deptDesc
        }
      }
    });
      
    // Checks whether the selected department is leaf or parent.
    this.service.GetAll().subscribe((returnedValue)=>{
      this.hasChilderen = returnedValue;
      for (let leaf of this.hasChilderen){
        if(leaf.managerId == this.selectedDeptId){
          this.children.push(leaf.deptName);
        }
        if(leaf.deptId == this.selectedParentId){
          this.selectedParentName = leaf.deptName;
        }
      }
    }); 
  }

  // submitForm() {
  //       this.service.deleteDepartment(this.data.departmentcode).subscribe( res => {
  //         alert("Delete Successfully");
  //         this.router.navigate(['/tableview']);
  //         this.dialog.close();
  //       });
  // }
}
