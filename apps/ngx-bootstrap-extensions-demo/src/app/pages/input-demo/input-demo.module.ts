import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputDemoRoutingModule} from './input-demo-routing.module';
import {InputDemoComponent} from './input-demo.component';
import {NgxBootstrapExtensionsModule} from "@ngx-bootstrap-extensions/ngx-bootstrap-extensions";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [InputDemoComponent],
  imports: [
    CommonModule,
    InputDemoRoutingModule,
    NgxBootstrapExtensionsModule,
    FormsModule
  ]
})
export class InputDemoModule {
}
