import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import { AppointmentsRepository } from '../repository';
import { CreateAppointmentService } from '../service';

const appointmentsRouter = Router();

appointmentsRouter.get("/", async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.status(200).json(appointments);
})

appointmentsRouter.post("/", async (request, response) => {
    try {
        const { provider, date } = request.body;
        const parsedDate = parseISO(date);
        
        let appointment;
        const createAppointmentService = new CreateAppointmentService();

        appointment = await createAppointmentService.execute({
            provider,
            date: parsedDate
        });
        return response.status(201).json(appointment);
    } catch (error: any) {
        return response.status(400).json({ error: error.message});
    }

})

export default appointmentsRouter;