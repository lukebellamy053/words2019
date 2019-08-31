import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { ImportantDatesComponent } from './components/important-dates/important-dates.component';
import { InvitedSpeakersComponent } from './components/invited-speakers/invited-speakers.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { CommitteesComponent } from './components/committees/committees.component';
import { ExternalStringPipe } from './pipes/external-string.pipe';
import { MarkdownModule } from 'angular2-markdown';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AcceptedPapersComponent } from './components/accepted-papers/accepted-papers.component';
import { ConferenceInfoComponent } from './components/conference-info/conference-info.component';
import { MathjaxComponent } from './components/mathjax/mathjax.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ConferenceProgrammeComponent } from './components/conference-programme/conference-programme.component';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { SocialEventsComponent } from './components/social-events/social-events.component';
import { LocalInformationComponent } from './components/local-information/local-information.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingSectionComponent,
    SubmissionsComponent,
    ImportantDatesComponent,
    InvitedSpeakersComponent,
    TutorialsComponent,
    CommitteesComponent,
    ExternalStringPipe,
    SponsorsComponent,
    AcceptedPapersComponent,
    ConferenceInfoComponent,
    MathjaxComponent,
    ParticipantsComponent,
    ConferenceProgrammeComponent,
    EventDetailsComponent,
    SocialEventsComponent,
    LocalInformationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
