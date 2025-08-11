import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone HLML5',
    },

    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone CSS3',
    },
    
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone JavaScript',
    },
    
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone Angular',
    },
    
  ])
}
