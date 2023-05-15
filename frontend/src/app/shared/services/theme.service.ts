import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public theme = signal<boolean>(false);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public themeChange(): void {
    let themeLink = this.document.getElementById(
      "app-theme"
    ) as HTMLLinkElement;

    this.theme.set(!this.theme());
    let themeVar = this.theme() ? "soho-dark" : "soho-light";

    if (themeLink) {
      themeLink.href = themeVar + ".css";
    }
  }
}
