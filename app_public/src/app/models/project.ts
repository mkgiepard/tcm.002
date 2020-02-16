export default class ProjectClass {
    private _id: number;
    private _name: string;
    private _subtitle: string;
    private _status: string;
    private _author: string;
    private _create_date: Date;

    constructor(name?: string) {
        this._name = name;
        this._status = "NEW";
        this._create_date = new Date();
    }

    get id(): number {
        return this._id;
    }
    
    set id(id: number)  {
      this._id = id;
    }
    
    get name(): string {
      return this._name;
    }
    
    set name(name: string) {
      this._name = name;
    }

    get subtitle(): string {
        return this._subtitle;
    }

    set subtitle(subtitle: string) {
        this._subtitle = subtitle;
    }

    get status(): string {
        return this._status;
    }

    set status(status: string) {
        this._status = status;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    get create_date(): Date {
        return this._create_date;
    }

    set create_date(create_date: Date) {
        throw new Error("Property 'create_date' is write-only!");
    }
}