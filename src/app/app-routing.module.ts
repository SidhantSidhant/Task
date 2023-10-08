import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './sheard/pages/form/form.component';
import { DashbordComponent } from './sheard/pages/dashbord/dashbord.component';
import { ContactComponent } from './sheard/pages/contact/contact.component';

const routes: Routes = [
  {
    path: "", component: DashbordComponent,
    children: [
      { path: "table", component: FormComponent }
    ]
  },
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
