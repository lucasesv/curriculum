import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent, pathMatch: 'full' },
  { path: 'curriculo', component: CurriculoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}