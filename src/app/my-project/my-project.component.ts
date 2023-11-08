import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

export interface Projet {
  Name: string;
  RepoUrl: string;
  RepoImage: string;
  Description: string;
}

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  ProjetsList: Projet[] = [];

  public constructor (private http:HttpClient){

  }

  

  ngOnInit(): void {
    console.log ("let's try to load the data")
    this.getAllProjects().subscribe(
      ProjetsList => this.ProjetsList = ProjetsList
    )
  }

  getAllProjects(): Observable<Projet[]>{
    return this.http.get<Projet[]>(`/assets/data/projectsList.json`).pipe(
      catchError(
        error => {
          console.log(error);
          return of([]);
        }
      )
    );
  }

}


