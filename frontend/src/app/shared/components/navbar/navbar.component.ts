import { Component, signal } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  public theme = this.themeService.theme;

  constructor(private readonly themeService: ThemeService) {}

  public changeTheme(): void {
    this.themeService.themeChange();
  }

  public accessMenu(): void {
    console.log("Working");
  }
}
