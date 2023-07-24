import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// User Defined Components
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { LineTreeViewComponent } from './line-tree-view/line-tree-view.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home' },
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'treeview', component: TreeViewComponent},
  {path: 'tableview', component: TableViewComponent},
  {path: 'linetreeview', component: LineTreeViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
