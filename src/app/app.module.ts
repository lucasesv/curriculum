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
import { MailerService } from './mailer.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ExperienceItemComponent } from './curriculo/experience-list/experience-item/experience-item.component';
import { ExperienceListComponent } from './curriculo/experience-list/experience-list.component';
import { SkillListComponent } from './curriculo//skill-list/skill-list.component';
import { SkillItemComponent } from './curriculo/skill-list/skill-item/skill-item.component';
import { ContactListComponent } from './curriculo/contact-list/contact-list.component';
import { ContactItemComponent } from './curriculo/contact-list/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillComponent,
    ContactComponent,
    CurriculoComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
    SkillListComponent,
    SkillItemComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }