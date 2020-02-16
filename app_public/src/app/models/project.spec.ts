import ProjectClass from './project';
import { MatCardSubtitle } from '@angular/material';

describe('ProjectClass test', () => {
    let project: ProjectClass = null;

    beforeEach(() => {
        project = new ProjectClass();
    });

    it('should have a valid constructor', () => {
        expect(project).not.toBeNull();
    })

    it('should set name and create_date through constructor', () => {
        project = new ProjectClass('testing project');
        expect(project.name).toEqual('testing project');
        expect(project.create_date).not.toBeNull();
    });

    it('should get and set id correctly', () => {
        project.id = 1;
        expect(project.id).toEqual(1);
    });

    it('should get and set name correctly', () => {
        project.name = 'testing project';
        expect(project.name).toEqual('testing project');
    });

    it('should get and set subtitle correctly', () => {
        project.subtitle = 'project subtitle';
        expect(project.subtitle).toEqual('project subtitle');
    });

    it('should get and set author correctly', () => {
        project.author = 'John Rambo';
        expect(project.author).toEqual('John Rambo');
    });

    it('should get create_date correctly', () => {
        project = new ProjectClass('testing project');
        expect(project.create_date).not.toBeNull();
        expect(project.create_date instanceof Date).toBeTruthy();
    });

    it('should not allow to set a "create_date"', () => {
        expect(function() {project.create_date = new Date()})
            .toThrowError("Property 'create_date' is write-only!");

    });
    
    afterEach(() => {
        project = null;
    });
});