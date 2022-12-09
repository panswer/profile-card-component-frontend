import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserProfile } from '../interfaces/UserProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  isLoading: boolean = true;

  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<UserProfile> {
    const userProfile = this.httpClient.get<UserProfile>(
      '/assets/api/profile.json'
    );

    return userProfile;
  }
}
