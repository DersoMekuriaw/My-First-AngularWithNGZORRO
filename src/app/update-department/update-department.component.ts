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
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  //validateForm!: UntypedFormGroup;
  size: NzButtonSize = 'large';
  selectedValue = 'null';
  editdata: any;
  departments: DepartmentInterface[] = [];
  oneRootCheck: DepartmentInterface[] = [];
  isOneRoot: boolean = true;
  rootId: any;

  selectedId: any;

  constructor(
    private fb: UntypedFormBuilder,
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private dialog: MatDialogRef<UpdateDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {
    this.router.navigate (['/tableview']);
    this.service.GetAll().subscribe((returnedValue)=>{
      this.oneRootCheck = returnedValue;
      
      let counter: number = 0;
      
      for (let root of this.oneRootCheck){
        if(root.managerId == "null"){
          counter = counter + 1;
          this.rootId = root.id;
        }
      }
      if (counter<2 && this.rootId == this.data.departmentcode){
        
        this.isOneRoot = false;
      }

    });
      
    this.service.GetAll().subscribe((returnedValue) =>(this.departments = returnedValue.filter(
          (department) => department.id != this.data.departmentcode
        ))
    );

    this.selectedId = this.data.departmentcode;


    if (this.data.departmentcode != null && this.data.departmentcode != '') {
      this.service.GetByID(this.data.departmentcode).subscribe((res) => {
        this.editdata = res;
        this.updateform.setValue({
          id: this.editdata.id,
          deptId: this.editdata.deptId,
          deptName: this.editdata.deptName,
          deptDesc: this.editdata.deptDesc,
          managerId: this.editdata.managerId,
        });
      });
    }
  }

  updateform = this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    deptId: this.builder.control('', Validators.required),
    deptName: this.builder.control('', Validators.required),
    deptDesc: this.builder.control('', Validators.required),
    managerId: this.builder.control('', Validators.required),
  });

  submitForm() {
    if (this.updateform.valid) {
        this.service.Updatedepartment(this.updateform.value.id,this.updateform.value).subscribe( res => {
          
          
          this.service.GetAll().subscribe((returnedValue)=>{
            this.oneRootCheck = returnedValue;
                        
            for (let child of this.oneRootCheck){
              if(child.managerId == this.editdata.deptId){

                const updatedRecord = {
                  id: child.id,
                  deptId: child.deptId,
                  deptName: child.deptName,
                  deptDesc: child.deptDesc,
                  managerId: this.editdata.managerId
                };

                this.service.Updatedepartment(child.id,updatedRecord).subscribe();
              }
            }      
          });
          
          alert("Update Successfully");
          this.router.navigate(['/tableview']);
          this.dialog.close();
        });
    }else{
      alert('Failed to Update, Please enter valid data');
      this.router.navigate(['/tableview']);
    }
  }
}
