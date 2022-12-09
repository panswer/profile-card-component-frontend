import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile-body',
  templateUrl: './card-profile-body.component.html',
  styleUrls: ['./card-profile-body.component.css'],
})
export class CardProfileBodyComponent {
  @Input() firstname!: string;
  @Input() lastname!: string;
  @Input() age!: number;
  @Input() country!: string;
}
