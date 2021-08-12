import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CrowDonat';

  constructor(private themeService: ThemeService) {
  }

  selectTheme(themeName: string) {
    this.themeService.selectTheme(themeName).then(() => {
      console.log('hell yeah it works');
    });
  }
}
