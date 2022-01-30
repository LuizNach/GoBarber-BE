import { Router } from 'express';
import { parseISO, startOfHour } from 'date-fns';
import { AppointmentsRepository } from '../repository';

const appointmentsRouter = Router();
const repository = new AppointmentsRepository();

appointmentsRouter.get("/", (request, response) => {
    const appointments = repository.getAllAppointments();
    return response.status(200).json(appointments);
})

appointmentsRouter.post("/", (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    
    const findAppointmentByDate = repository.findByDate(parsedDate);

    if(findAppointmentByDate) {
        return response.status(400).json({ message: "This date has already an appointment"});
    }

    const appointment = repository.createAppointment(provider, parsedDate);

    return response.status(201).json(appointment);
})

export default appointmentsRouter;