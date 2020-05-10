import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Project } from "../models/project.model";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = [
      {
        id: 1,
        name: "Project A",
        subtitle: "Sanity tests",
        status: "New",
        author: "Mario Bros",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 2,
        name: "Project B",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 3,
        name: "Project C",
        subtitle: "Customer acceptance tests",
        status: "Blocked",
        author: "Red Dragon",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 4,
        name: "Project D",
        subtitle: "Integration tests",
        status: "Closed",
        author: "Rocky Balboa",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 5,
        name: "Project E",
        subtitle: "Smoke tests",
        status: "Active",
        author: "Connan Barbarian",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 6,
        name: "Project F",
        subtitle: "Regression tests",
        status: "Active",
        author: "Mario Bros",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 7,
        name: "Project G",
        subtitle: "Regression tests",
        status: "Active",
        author: "Mario Bros",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 8,
        name: "Project H",
        subtitle: "Regression tests",
        status: "Active",
        author: "Connan Barbarian",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 9,
        name: "Project I",
        subtitle: "Regression tests",
        status: "Panic",
        author: "Connan Barbarian",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 10,
        name: "Project J",
        subtitle: "Regression tests",
        status: "Active",
        author: "Connan Barbarian",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 11,
        name: "Project K",
        subtitle: "Regression tests",
        status: "Panic",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 12,
        name: "Project L",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 13,
        name: "Project M",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 14,
        name: "Project N",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 15,
        name: "Project O",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
      {
        id: 16,
        name: "Project P",
        subtitle: "Regression tests",
        status: "Active",
        author: "Jon Snow",
        create_date: new Date("2019-11-12"),
      },
    ];
    console.log("in-memory-data > " + projects.length);
    return { projects };
  }
}
