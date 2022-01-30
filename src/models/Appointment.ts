import { v4 as uuidv4 } from 'uuid';

export default class Appointment {
    id: String;
    provider: String;
    date: Date;

    constructor(provider: String, date: Date) {
        this.id = uuidv4();
        this.date = date;
        this.provider = provider;
    }
}