import Router, { response } from 'express';
import { isEqual, parseISO, startOfHour } from 'date-fns';
import { Appointment } from '../models';

const appointmentsRouter = Router();

let appointments: Appointment[] = [];

appointmentsRouter.get("/", (request, response) => {
    return response.status(200).json({ appointments });
})

appointmentsRouter.post("/", (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    
    const findAppointmentByDate = appointments.find( appointment => isEqual(parsedDate, appointment.date));

    if(findAppointmentByDate) {
        return response.status(400).json({ message: "This date has already an appointment"});
    }

    const appointment = new Appointment(
        provider,
        parsedDate
    );

    appointments.push(appointment);

    return response.status(201).json(appointment);
})

export default appointmentsRouter;