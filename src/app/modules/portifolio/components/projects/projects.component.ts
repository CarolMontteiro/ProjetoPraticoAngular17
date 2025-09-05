import { Component, inject, signal } from '@angular/core';
import { iProjects } from '../../interface/iProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: iProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
