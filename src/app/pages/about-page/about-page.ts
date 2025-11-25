import {Component, inject, OnInit} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export default class AboutPage implements OnInit{

  private metadataService = inject(MetadataService)

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)){
    //   console.log(this.platform)
    //   this.title.setTitle('About Page')
    //   this.meta.updateTag({name: 'description', content: 'About Page'})
    //   this.meta.updateTag({name: 'og-title', content: 'About Page'})
    //   this.meta.updateTag({name: 'keywords', content: 'About,Page'})
    // }
    this.metadataService.setTitle('About Page')
    this.metadataService.setMetadata([
      {name: 'description', content: 'About Page'},
      {name: 'og-title', content: 'About Page'},
      {name: 'keywords', content: 'About,Page'}
    ])

  }

}
