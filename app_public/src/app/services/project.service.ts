import { Injectable } from "@angular/core";
import { Project, PROJECT_DATA } from "../models/project.model";
import { Title } from "@angular/platform-browser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private projectsUrl = "api/projects"; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET projects from the server */
  getProjects(): Observable<Project[]> {
    console.log("project.service");
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      tap((_) => console.log("fetched projects")),
      catchError(this.handleError<Project[]>("getProjects", []))
    );
  }

  getLastId() {
    return PROJECT_DATA.length;
  }

  /** GET project by id. Will 404 if id not found */
  getProjectById(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap((_) => console.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProjectById id=${id}`))
    );
  }

  getProjectByName(name) {
    let result = null;
    PROJECT_DATA.forEach((element) => {
      if (element.name === name) result = element;
    });
    return result;
  }

  addProject(project) {
    PROJECT_DATA.push(project);
  }

  updateProject(project) {
    let index = -1;
    PROJECT_DATA.forEach((element) => {
      if (element.id === project.id) {
        index = PROJECT_DATA.indexOf(element);
      }
    });
    if (index > -1) PROJECT_DATA.splice(index, 1);
    PROJECT_DATA.push(project);
  }

  deleteProject(id: Number): void {
    for (let i = 0; i < PROJECT_DATA.length; i++) {
      if (PROJECT_DATA[i].id === id) {
        PROJECT_DATA.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
