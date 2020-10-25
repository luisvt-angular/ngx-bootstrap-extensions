import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BseInputComponent } from './bse-input/bse-input.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [BseInputComponent],
  exports: [BseInputComponent]
})
export class NgxBootstrapExtensionsModule {}
