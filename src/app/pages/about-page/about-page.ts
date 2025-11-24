import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export default class AboutPage implements OnInit{
  private title = inject(Title)
  private meta = inject(Meta)
  private platform = inject(PLATFORM_ID)

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)){
      console.log(this.platform)
      this.title.setTitle('About Page')
      this.meta.updateTag({name: 'description', content: 'About Page'})
      this.meta.updateTag({name: 'og-title', content: 'About Page'})
      this.meta.updateTag({name: 'keywords', content: 'About,Page'})
    }

  }

}
