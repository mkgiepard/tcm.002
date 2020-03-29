import { Injectable } from '@angular/core';
import { Project, PROJECT_DATA } from '../models/project.model';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects() {
    return PROJECT_DATA;
  }

  public getLastId() {
    return PROJECT_DATA.length;
  }

  public getProjectById(id) {
    // TODO: add 'id' to Project model
    return null;
  }

  public getProjectByName(name) {
    PROJECT_DATA.forEach(element => {
      if (element.name === name) return element;
    });
    return null;
  }

  public addProject(project) {
    PROJECT_DATA.push(project);
  }
}
