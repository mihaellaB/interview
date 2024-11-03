import { Component } from '@angular/core';
import { MainDataService } from './shared/services/main-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainData$ = this.mainDataService.getMainData();

  constructor(private mainDataService: MainDataService) {}

  onFilter(): void {
    // get the filter value
  }
}
