import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    CurriculoComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
    SkillListComponent,
    SkillItemComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
