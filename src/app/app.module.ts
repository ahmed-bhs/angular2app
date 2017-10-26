import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import {FormsModule} from '@angular/forms';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent},
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirectiveDirective,
    SessionAddFormComponent,
    SessionEditFormComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
