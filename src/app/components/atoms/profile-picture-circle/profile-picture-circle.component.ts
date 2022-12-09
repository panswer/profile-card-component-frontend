import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture-circle',
  templateUrl: './profile-picture-circle.component.html',
  styleUrls: ['./profile-picture-circle.component.css']
})
export class ProfilePictureCircleComponent {
  @Input() photo!: string;
}
