import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormArrayExapleComponent } from './components/form-array-exaple/form-array-exaple.component';

const routes: Routes = [
  {path: 'formBuilder', component: FormBuilderComponent},
  {path:'formArray', component: FormArrayExapleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
