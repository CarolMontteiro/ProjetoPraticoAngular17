import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/iExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:'Lorem Ipsum',
        p: 'Lorem | Ipsum',
      },
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui turpis, pharetra maximus eros fringilla, facilisis volutpat augue. Nulla bibendum vel mi a elementum',
    },

    {
      summary: {
        strong:'Lorem Ipsum',
        p: 'Lorem | Ipsum',
      },
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui turpis, pharetra maximus eros fringilla, facilisis volutpat augue. Nulla bibendum vel mi a elementum',
    },

    {
      summary: {
        strong:'Lorem Ipsum',
        p: 'Lorem | Ipsum',
      },
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui turpis, pharetra maximus eros fringilla, facilisis volutpat augue. Nulla bibendum vel mi a elementum',
    },
  ]);
}
