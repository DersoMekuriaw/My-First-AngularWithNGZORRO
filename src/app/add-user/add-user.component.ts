import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

}




// import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../service/auth.service';
// import { Router } from '@angular/router';
// import { DepartmentInterface } from '../Department';

// import { MatDialog } from '@angular/material/dialog';
// import { UpdateDepartmentComponent } from '../update-department/update-department.component';
// import { DeleteDepartmentComponent } from '../delete-department/delete-department.component';
// import { ShowDetailsComponent } from '../show-details/show-details.component';

// @Component({
//   selector: 'app-table-view',
//   templateUrl: './table-view.component.html',
//   styleUrls: ['./table-view.component.css'],
// })
// export class TableViewComponent implements OnInit {
//   searchValue = '';
//   visible = false;
//   departments: DepartmentInterface[] = [];
//   managers: DepartmentInterface[] = [];
//   listOfDisplayData: DepartmentInterface[] = [];

//   constructor(
//     private service: AuthService,
//     private router: Router,
//     private dialog: MatDialog
//   ) {}
  

//   ngOnInit(): void {
//     this.service
//       .GetAll()
//       .subscribe((returnedValue) => (this.departments = returnedValue));
      
//     this.service
//       .GetAll()
//       .subscribe((returnedValue) => (this.managers = returnedValue));
//     this.listOfDisplayData = [...this.departments];
//   }

//   updateDepartment(id: any) {

//     const popup = this.dialog.open(UpdateDepartmentComponent,{
//       enterAnimationDuration:'1000ms',
//       exitAnimationDuration:'500ms',
//       width: '50%',
//       data:{
//         departmentcode: id
//       }
      
//     }); 
//     popup.afterClosed().subscribe(res =>{
//       this.service
//       .GetAll()
//       .subscribe((returnedValue) => (this.departments = returnedValue));
//     });
//   }

//   viewDetail(id: any) {

//     const popup = this.dialog.open(ShowDetailsComponent,{
//       enterAnimationDuration:'1000ms',
//       exitAnimationDuration:'500ms',
//       width: '50%',
//       data:{
//         departmentcode: id
//       }
      
//     }); 
//     popup.afterClosed().subscribe(res =>{
//       this.service
//       .GetAll()
//       .subscribe((returnedValue) => (this.departments = returnedValue));
//     });
//   }


//   deleteDepartment(id: any) {

//     const popup = this.dialog.open(DeleteDepartmentComponent,{
//       enterAnimationDuration:'1000ms',
//       exitAnimationDuration:'500ms',
//       width: '50%',
//       data:{
//         departmentcode: id
//       }
      
//     }); 
//     popup.afterClosed().subscribe(res =>{
//       this.service
//       .GetAll()
//       .subscribe((returnedValue) => (this.departments = returnedValue));
//     });
//   }

// }
