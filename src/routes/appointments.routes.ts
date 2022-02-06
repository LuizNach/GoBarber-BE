import { Router } from 'express';
import { parseISO } from 'date-fns';
import { AppointmentsRepository } from '../repository';
import { CreateAppointmentService } from '../service';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get("/", (request, response) => {
    const appointments = appointmentsRepository.getAllAppointments();
    return response.status(200).json(appointments);
})

appointmentsRouter.post("/", (request, response) => {
    try {
        const { provider, date } = request.body;
        const parsedDate = parseISO(date);
        
        let appointment;
        const createAppointmentService = new CreateAppointmentService(
            appointmentsRepository
        );

        appointment = createAppointmentService.execute({
            provider,
            date: parsedDate
        });
        return response.status(201).json(appointment);
    } catch (error: any) {
        return response.status(400).json({ error: error.message});
    }

})

export default appointmentsRouter;