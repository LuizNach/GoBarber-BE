import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
export default class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column('varchar')
    provider: String;

    @Column('time with time zone')
    date: Date;

}