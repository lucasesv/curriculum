import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent, pathMatch: 'full' },
  { path: 'curriculum', component: CurriculumComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}