import { Injectable } from '@angular/core';
import { Project, PROJECT_DATA } from '../models/project.model';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects() {
    return PROJECT_DATA;
  }

  getLastId() {
    return PROJECT_DATA.length;
  }

  getProjectById(id) {
    let result = null;
    PROJECT_DATA.forEach(element => {
      if (element.id === id) result = element;
    });
    return result;
  }

  getProjectByName(name) {
    let result = null;
    PROJECT_DATA.forEach(element => {
      if (element.name === name) result = element;
    });
    return result;
  }

  addProject(project) {
    PROJECT_DATA.push(project);
  }

  updateProject(project) {
    let index = -1;
    PROJECT_DATA.forEach(element => {
      if (element.id === project.id) {
        index = PROJECT_DATA.indexOf(element);
      }
    });
    if (index > -1) PROJECT_DATA.splice(index, 1);
    PROJECT_DATA.push(project);
  }
}
