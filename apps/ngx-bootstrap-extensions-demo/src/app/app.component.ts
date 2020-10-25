import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatxSidenavMenuController} from "angular-material-extended";

@Component({
  selector: 'ngx-bootstrap-extensions-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public menuCtrl: MatxSidenavMenuController) {}

}
