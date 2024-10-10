import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';


// User Defined Components
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { LineTreeViewComponent } from './line-tree-view/line-tree-view.component';

import { AuthService } from './service/auth.service';

registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    RegistrationComponent,
    TableViewComponent,
    TreeViewComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    ShowDetailsComponent,
    LineTreeViewComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzCardModule,
    NzDropDownModule,
    NzSelectModule,
    NzTableModule,
    NzIconModule,
    NzTreeModule,
    NzTreeViewModule,
    NzSwitchModule,
    NzSpaceModule,
    NzCalendarModule,
    NzDividerModule,

    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
  ],

  //

  providers: [AuthService, { provide: NZ_I18N, useValue: hi_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
