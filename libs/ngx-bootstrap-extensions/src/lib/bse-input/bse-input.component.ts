import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Input,
  Optional,
  Renderer2,
  Self
} from '@angular/core';
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {
  DefaultValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: 'bse-input',
  templateUrl: './bse-input.component.html',
  styleUrls: ['./bse-input.component.scss'],
  // providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => BseInputComponent), multi: true}]
})
export class BseInputComponent extends DefaultValueAccessor implements AfterContentInit {

  @Input() id: string = '';

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() required: boolean;

  @Input() pattern: string;

  @Input() type: 'text' | 'password' | 'tel' | 'number' | 'email' | 'search' | 'url' = 'text';

  @Input() min: string | number;

  @Input() max: string | number;

  @Input() minlength: string | number;

  @Input() maxlength: string | number;

  @Input() step: string | number;

  // @Input() hideRequiredMarker: boolean | '';
  //
  // @Input() floatLabel: 'auto' | 'always' | 'never';

  @Input() autocomplete: string = 'off';

  @Input() helpText: string;
  private errors: ValidationErrors;

  @Input() set disabledControl(disabled: boolean) {
    this.disabled = disabled;
  }

  @Input() set disabled(disabled: boolean) {
    if (coerceBooleanProperty(disabled)) {
      this.formControl.disable({emitEvent: false});
    } else {
      this.formControl.enable({emitEvent: false});
    }
  }

  // @ContentChild(NgControl,  {static: true}) ngControl: NgControl;
  // @ContentChild(NgModel,  {static: true}) ngModel: NgModel;

  formControl = new FormControl();

  constructor(@Self() @Optional() public ngControl: NgControl, _renderer: Renderer2, _elementRef: ElementRef) {
    super(_renderer, _elementRef, false);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterContentInit() {
    // this.formControl.valueChanges.subscribe(value => {
    //   if (this.type === 'number') {
    //     this.onChange(Number(value))
    //   } else {
    //     this.onChange(value);
    //   }
    // });
    // if (this.ngControl && this.ngControl.statusChanges) {
    //   this.ngControl.control.statusChanges.subscribe(() => {
    //     this.formControl.setErrors(this.ngControl.errors);
    //   });
    // }
  }

  getErrors(errors: ValidationErrors) {
    return Object.values(errors);
  }

  writeValue(value: any): void {
    this.formControl.setValue(value, {emitEvent: false});
  }
}
