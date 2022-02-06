import { startOfHour } from 'date-fns';
import { Appointment } from '../models';
import { AppointmentsRepository } from '../repository';

interface CreateAppointmentServiceDTO {
  provider: String;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: CreateAppointmentServiceDTO): Appointment {

    const appointmentDate = startOfHour(date);
    const findAppointmentByDate = this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentByDate) {
      throw Error("This date is already booked");
    }

    const appointment = this.appointmentsRepository.createAppointment({
      provider,
      date: appointmentDate
    });

    return appointment;

  }
}

export default CreateAppointmentService;