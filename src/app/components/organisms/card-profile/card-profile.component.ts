import { Component } from '@angular/core';

import { UserProfile } from 'src/app/interfaces/UserProfile';

import { UserProfileService } from '../../../services/user-profile.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css'],
})
export class CardProfileComponent {
  userProfile?: UserProfile;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfileService.getProfile().subscribe((userProfile) => {
      this.userProfile = userProfile;
    });
  }
}
