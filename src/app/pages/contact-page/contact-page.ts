import {Component, inject, OnInit} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export default class ContactPage implements OnInit{

  private metadataService = inject(MetadataService)

  ngOnInit(): void {
    this.metadataService.setTitle('Contact Page')
    this.metadataService.setMetadata([
      {name: 'description', content: 'Contact Page'},
      {name: 'og-title', content: 'Contact Page'},
      {name: 'keywords', content: 'Contact,Page'}
    ])
  }
}
