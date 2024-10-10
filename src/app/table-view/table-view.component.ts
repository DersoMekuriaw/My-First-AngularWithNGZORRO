import { Component, OnInit,ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table'; 
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DepartmentInterface } from '../Department';

import { UpdateDepartmentComponent } from '../update-department/update-department.component';
import { DeleteDepartmentComponent } from '../delete-department/delete-department.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {

  departments: DepartmentInterface[] = [];

  userlist: DepartmentInterface[] = [];
  dataSource: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(
    private service: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  

  ngOnInit(): void {
    this.loadDepartment();
    // this.TableViewComponent.forceUpdate();
  }

  loadDepartment(){
    this.router.navigate (['/tableview']);
    this.service.GetAll().subscribe(res =>{
      this.userlist =res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['id', 'deptName', 'deptDesc', 'managerId', 'actions'];


  getParentName(parentid: number): string {
    const record = this.userlist.find((record:any) => record.deptId === parentid);
    return record ? record.deptName : '';
  }
  
    viewDetail(id: any) {
    const popup = this.dialog.open(ShowDetailsComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        departmentcode: id
      }
      
    }); 
    popup.afterClosed().subscribe(res =>{
      this.service
      .GetAll()
      .subscribe((returnedValue) => (this.departments = returnedValue));
    });
  }

    updateDepartment(id: any) {
    const popup = this.dialog.open(UpdateDepartmentComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        departmentcode: id
      }
      
    }); 
    popup.afterClosed().subscribe(res =>{
      this.service
      .GetAll()
      .subscribe((returnedValue) => (this.departments = returnedValue));
    });
  }

    deleteDepartment(id: any) {

    const popup = this.dialog.open(DeleteDepartmentComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        departmentcode: id
      }
      
    }); 
    popup.afterClosed().subscribe(res =>{
      this.service
      .GetAll()
      .subscribe((returnedValue) => (this.departments = returnedValue));
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewModal(clickedId: any){

  }
}
