import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../form/form.component';
import { FormElementsComponent } from '../form/form-elements/form-elements.component';
import { FormValidationComponent } from '../form/form-validation/form-validation.component';
import { FormWizardComponent } from '../form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from '../form/form-layouts/form-layouts.component';

const FormsRoutes: Routes = [
    {
        path: 'forms',
        component: FormComponent,
        children: [
            { path: '', component: FormElementsComponent, },
            { path: 'elements', component: FormElementsComponent, },
            { path: 'validation', component: FormValidationComponent, },
            { path: 'wizard', component: FormWizardComponent, },
            { path: 'layouts', component: FormLayoutsComponent, },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(FormsRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class FormRoutingModule { }