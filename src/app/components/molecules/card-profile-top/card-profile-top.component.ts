import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile-top',
  templateUrl: './card-profile-top.component.html',
  styleUrls: ['./card-profile-top.component.css'],
})
export class CardProfileTopComponent {
  @Input() photo!: string;
}
