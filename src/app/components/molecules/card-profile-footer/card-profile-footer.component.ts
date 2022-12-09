import { Component, Input } from '@angular/core';
import { UserProfileStats } from 'src/app/interfaces/UserProfile';

@Component({
  selector: 'app-card-profile-footer',
  templateUrl: './card-profile-footer.component.html',
  styleUrls: ['./card-profile-footer.component.css'],
})
export class CardProfileFooterComponent {
  @Input() userStats!: UserProfileStats;
}
