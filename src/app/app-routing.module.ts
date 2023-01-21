import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstStepComponent} from "./components/first-step/first-step.component";
import {ThirdStepComponent} from "./components/third-step/third-step.component";
import {SecondStepComponent} from "./components/second-step/second-step.component";
import {FormGuard} from "./guards/form.guard";

const routes: Routes = [{
  path: '', redirectTo: 'first-step', pathMatch: 'full',
}, {path: 'first-step', component: FirstStepComponent}, {
  path: 'second-step',
  component: SecondStepComponent,
  canActivate: [FormGuard],
}, {path: 'third-step', component: ThirdStepComponent, canActivate: [FormGuard]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
