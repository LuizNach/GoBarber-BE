import { Repository, EntityRepository} from 'typeorm';

import { Appointment } from '../models';

interface CreateAppointmentDTO {
    provider: String;
    date: Date;
}

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

    // private appointments: Appointment[];

    // constructor() {
    //     this.appointments = [];
    // }

    /* TypeORM already has get all mthod
    public getAllAppointments(): Appointment[] {
        return [...this.appointments];
    }
    */

    public async findByDate(date: Date): Promise<Appointment | null> {
        const appointment = await this.findOne({ 
            where: { date },
        });
        return appointment || null;
    }

    /* TypeORM already has a proper create method
    public createAppointment({provider, date}: CreateAppointmentDTO): Appointment {
        const newAppointment = new Appointment({
            provider,
            date
        });

        this.appointments.push(newAppointment);

        return newAppointment;
    }
    */
}

export { AppointmentsRepository, CreateAppointmentDTO };