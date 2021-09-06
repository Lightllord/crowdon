import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../../auth/auth-shared/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  host: {
    'class': 'main-header',
  }
})
export class MainHeaderComponent implements OnInit {
  isDark: boolean = true;

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isDark = this.themeService.themeName === 'dark-theme';
  }

  themeChanging = false;

  changeTheme() {
    if (!this.themeChanging) {
      this.themeChanging = true;
      this.themeService.selectTheme(this.isDark ? 'light-theme' : 'dark-theme').then(() => {
        this.isDark = !this.isDark;
      }).finally(() => {
        this.themeChanging = false
      });
    }
  }

  openAuthDialog() {
    const dialogRef = this.dialog.open(AuthDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
