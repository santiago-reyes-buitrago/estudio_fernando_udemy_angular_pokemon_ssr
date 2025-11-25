import {Component, inject, OnInit} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
})
export default class PricingPage implements OnInit{
  private metadataService = inject(MetadataService)

  ngOnInit(): void {
    this.metadataService.setTitle('Princing Page')
    this.metadataService.setMetadata([
      {name: 'description', content: 'Princing Page'},
      {name: 'og-title', content: 'Princing Page'},
      {name: 'keywords', content: 'Price,Page'}
    ])
  }

}
