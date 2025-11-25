import {inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
export interface Metadata {
  name: string,
  content: string
}

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  private title = inject(Title)
  private meta = inject(Meta)

  setTitle(title: string){
    this.title.setTitle(title)
  }

  setMetadata(metadata:Metadata[]){
    metadata.forEach(meta => this.meta.updateTag({name: meta.name, content: meta.content}))
  }
}
