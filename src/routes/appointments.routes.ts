import Router, { response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { isEqual, parseISO, startOfHour } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
    uuid: String;
    provider: String;
    date: Date;
}

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

    const appointment = {
        uuid: uuidv4(),
        provider,
        date: parsedDate
    };

    appointments.push(appointment);

    return response.status(201).json(appointment);
})

export default appointmentsRouter;