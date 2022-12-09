import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CardProfileComponent } from './components/organisms/card-profile/card-profile.component';
import { ProfilePictureCircleComponent } from './components/atoms/profile-picture-circle/profile-picture-circle.component';
import { CardProfileTopComponent } from './components/molecules/card-profile-top/card-profile-top.component';
import { BgTopCardComponent } from './components/atoms/bg-top-card/bg-top-card.component';
import { CardProfileBodyComponent } from './components/atoms/card-profile-body/card-profile-body.component';
import { CardStatComponent } from './components/atoms/card-stat/card-stat.component';
import { CardProfileFooterComponent } from './components/molecules/card-profile-footer/card-profile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardProfileComponent,
    ProfilePictureCircleComponent,
    CardProfileTopComponent,
    BgTopCardComponent,
    CardProfileBodyComponent,
    CardStatComponent,
    CardProfileFooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
