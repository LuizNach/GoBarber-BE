import { Repository, EntityRepository} from 'typeorm';

import { Appointment } from '../models';

interface CreateAppointmentDTO {
    provider: String;
    date: Date;
}

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

    public async findByDate(date: Date): Promise<Appointment | null> {
        const appointment = await this.findOne({ 
            where: { date },
        });
        return appointment || null;
    }

}

export { AppointmentsRepository, CreateAppointmentDTO };