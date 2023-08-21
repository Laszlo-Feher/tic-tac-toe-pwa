import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SinglelayerComponent} from "./singlelayer/singlelayer.component";
import {MultiplayerComponent} from "./multiplayer/multiplayer.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'singleplayer', component: SinglelayerComponent},
  {path: 'multiplayer', component: MultiplayerComponent},
  {path: '**', redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
