import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// must match with the css files like 'dark-theme.css'
export const THEMES = [
  'light-theme',
  'dark-theme'
]

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeName = '';
  private renderer2: Renderer2;
  private htmlElement: HTMLElement | undefined;

  constructor(@Inject(DOCUMENT) private doc: Document, private rendererFactory2: RendererFactory2) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    this.themeName = localStorage.getItem('crowDonat.theme') || '';
    if (this.themeName && !THEMES.includes(this.themeName)) {
      this.themeName = '';
    }
    if (!this.themeName) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)')?.matches) {
        this.themeName = 'light-theme';
      } else {
        this.themeName = 'dark-theme';
      }
      localStorage.setItem('crowDonat.theme', this.themeName);
    }
    this.selectTheme(this.themeName).then(() => {
    })
  }

  async selectTheme(themeName: string): Promise<any> {
    if (THEMES.includes(themeName)) {
      this.themeName = themeName;
      localStorage.setItem('crowDonat.theme', this.themeName);
      const elem = await this.createAndLoadStyleLink(themeName);
      if (this.htmlElement) {
        this.renderer2.removeChild(this.doc.head, this.htmlElement);
      }
      this.htmlElement = elem;
    }
    return this.htmlElement;
  }

  createAndLoadStyleLink(themeName: string): Promise<HTMLElement> {
    return new Promise<HTMLElement>((resolve => {
      const styleLink: HTMLElement = this.renderer2.createElement('link');
      this.renderer2.setAttribute(styleLink, 'rel', 'stylesheet');
      this.renderer2.setAttribute(styleLink, 'type', 'text/css');
      this.renderer2.setAttribute(styleLink, 'href', themeName + '.css');
      styleLink.onload = () => {
        resolve(styleLink)
      }
      this.renderer2.appendChild(this.doc.head, styleLink);
    }));
  }
}
