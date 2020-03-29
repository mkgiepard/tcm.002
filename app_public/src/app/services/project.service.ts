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

  getProjectById(id) {
    // TODO: add 'id' to Project model
    return null;
  }

  getProjectByName(name) {
    PROJECT_DATA.forEach(element => {
      if (element.name === name) return element;
    });
    return null;
  }

  addProject(name, subtitle, author) {
    const project = {
      name: name,
      subtitle: subtitle,
      author: author,
      status: "NEW",
      create_date: new Date()
    }
    PROJECT_DATA.push(project);
  }
}
