import { Component, Inject, OnInit, signal } from '@angular/core';
import { iProjects } from '../../../interface/iProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogHef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: iProjects
  ){}

  public getData = signal<iProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogHef.close();
  }
}
