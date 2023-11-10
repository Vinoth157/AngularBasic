import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixComponent } from './six/six.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormFieldRecordComponent } from './components/form-field-record/form-field-record.component';
import { TemplateComponent } from './components/template/template.component';
import { OptionalModifierComponent } from './DI/components/optional-modifier/optional-modifier.component';
import { SelfModifierComponent } from './DI/components/self-modifier/self-modifier.component';
import { SkipSelfModifierComponent } from './DI/components/skip-self-modifier/skip-self-modifier.component';
import { HostModifierComponent } from './DI/components/host-modifier/host-modifier.component';

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
      // {
      //   path: 'optional',
      //   component: OptionalModifierComponent,
      // },
      // {
      //   path: 'self',
      //   component: SelfModifierComponent,
      // },
      // {
      //   path: 'skipSelf',
      //   component: SkipSelfModifierComponent,
      // },
      {
        path: 'host',
        component: HostModifierComponent,
      },
      {
        path: '**',
        redirectTo: 'host',
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
