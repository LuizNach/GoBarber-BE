import { isEqual } from 'date-fns';
import { Appointment } from '../models';

class AppointmentsRepository {

    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public getAllAppointments(): Appointment[] {
        return [...this.appointments];
    }

    public findByDate(date: Date): Appointment | null {
        const appointment = this.appointments.find( appointment => isEqual(date, appointment.date));
        return appointment || null;
    }

    public createAppointment(provider: String, date: Date): Appointment {
        const newAppointment = new Appointment(provider,date);

        this.appointments.push(newAppointment);

        return newAppointment;
    }
}

export default AppointmentsRepository;