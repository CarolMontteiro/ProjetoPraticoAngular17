import { Component, signal } from '@angular/core';
import { iProjects } from '../../interface/iProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<iProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto front end',
      title: 'Front end',
      width: '100px',
      heigth: '51px',
      description: '<p>lorem ipsum tdf htentt caliyns khotherun en sley</p>',
      links: [
        {
          name: 'Conheça',
          href: '',
        },
      ],
    },
  ]);
}
