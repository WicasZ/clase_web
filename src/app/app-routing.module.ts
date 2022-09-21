import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'tool', component: ToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
