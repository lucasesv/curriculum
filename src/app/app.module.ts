import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ExperienceItemComponent } from './curriculum/experience-list/experience-item/experience-item.component';
import { ExperienceListComponent } from './curriculum/experience-list/experience-list.component';
import { SkillListComponent } from './curriculum//skill-list/skill-list.component';
import { SkillItemComponent } from './curriculum/skill-list/skill-item/skill-item.component';
import { ContactListComponent } from './curriculum/contact-list/contact-list.component';
import { ContactItemComponent } from './curriculum/contact-list/contact-item/contact-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillComponent,
    ContactComponent,
    CurriculumComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
    SkillListComponent,
    SkillItemComponent,
    ContactListComponent,
    ContactItemComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }