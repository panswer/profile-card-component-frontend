import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  templateUrl: './card-stat.component.html',
  styleUrls: ['./card-stat.component.css'],
})
export class CardStatComponent {
  @Input() statTitle!: string;
  @Input() statTotal!: number;

  @Input() statTotalFormat!: string;

  ngOnInit() {
    const result = this.statTotal / 1000;

    this.statTotalFormat = `${result}k`;
  }
}
