import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import {SessionEditFormComponent} from './session-edit-form/session-edit-form.component';
import {SessionAddFormComponent} from './session-add-form/session-add-form.component';
import {SessionItemComponent} from './session-item/session-item.component';
import {SessionItemServiceService} from './session-item-service.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'add', component: SessionAddFormComponent },
      {path: 'edit/:id', component: SessionEditFormComponent },
      {path: 'list', component: SessionItemListComponent },
      {path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent],
  providers: [SessionItemServiceService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
