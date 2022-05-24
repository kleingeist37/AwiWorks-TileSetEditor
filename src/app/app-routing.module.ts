import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoadComponent } from './components/load/load.component';
import { MainEditorComponent } from './components/main-editor/main-editor.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'editor', component: MainEditorComponent, pathMatch: 'full'},
  {path: 'load', component: LoadComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
