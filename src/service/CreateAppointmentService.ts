import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import { Appointment } from '../models';
import { AppointmentsRepository } from '../repository';

interface CreateAppointmentServiceDTO {
  provider: String;
  date: Date;
}

class CreateAppointmentService {

  public async execute({ provider, date }: CreateAppointmentServiceDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);
    const appointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

    if (appointmentInSameDate) {
      throw Error("This date is already booked");
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate
    });

    await appointmentsRepository.save(appointment);

    return appointment;

  }
}

export default CreateAppointmentService;