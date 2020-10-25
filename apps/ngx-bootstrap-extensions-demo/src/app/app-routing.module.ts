import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'input', pathMatch: 'full'},
  {path: 'input', loadChildren: () => import('./pages/input-demo/input-demo.module').then(m => m.InputDemoModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
