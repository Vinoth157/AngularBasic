import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixComponent } from './six/six.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormFieldRecordComponent } from './components/form-field-record/form-field-record.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateOutletSampleComponent } from './components/template-outlet/template-outlet-sample.component';

const routes: Routes = [
  {
    path: '',
    component: SixComponent,
    children: [
      {
        path: 'userForm',
        component: UserFormComponent,
      },
      {
        path: 'formRecord',
        component: FormFieldRecordComponent,
      },
      {
        path: 'template',
        component: TemplateComponent,
      },
      {
        path: 'templateOutlet',
        component: TemplateOutletSampleComponent,
      },
      {
        path: '**',
        redirectTo: 'templateOutlet',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixRoutingModule {}
