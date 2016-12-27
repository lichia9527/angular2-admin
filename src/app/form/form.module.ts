import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { FormRoutingModule } from '../form/form-routing.module';

import { FormComponent } from '../form/form.component';
import { FormElementsComponent } from '../form/form-elements/form-elements.component';
import { FormValidationComponent } from '../form/form-validation/form-validation.component';
import { FormWizardComponent } from '../form/form-wizard/form-wizard.component';
import { FormLayoutsComponent } from '../form/form-layouts/form-layouts.component';

@NgModule({
    declarations: [
        FormComponent,
        FormElementsComponent,
        FormValidationComponent,
        FormWizardComponent,
        FormLayoutsComponent,
    ],
    imports: [
        FormRoutingModule,
        MaterialModule
    ],

    providers: [],
})
export class FormModule { }