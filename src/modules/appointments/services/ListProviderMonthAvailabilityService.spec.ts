import AppError from '@shared/errors/AppError';

import ListProvidersMonthAvailabilityService from './ListProviderMonthAvailabilityService'
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'

let listProviderMonthAvailability: ListProvidersMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository()
        listProviderMonthAvailability = new ListProvidersMonthAvailabilityService(
            fakeAppointmentsRepository
        )
    })

    it('should be able to list the month availability from providers', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: 'some_id',
            date: new Date(2020, 3, 20, 8, 0, 0),
        })

        await fakeAppointmentsRepository.create({
            provider_id: 'some_id',
            date: new Date(2020, 4, 20, 8, 0, 0),
        })

        await fakeAppointmentsRepository.create({
            provider_id: 'some_id',
            date: new Date(2020, 4, 20, 10, 0, 0),
        })

        await fakeAppointmentsRepository.create({
            provider_id: 'some_id',
            date: new Date(2020, 4, 21, 8, 0, 0),
        })

        const availability = listProviderMonthAvailability.execute({
            provider_id: 'some_id',
            year: 2020,
            month: 5,
        })

        await expect(availability)
            .toEqual(expect.arrayContaining([
                { day: 19, available: true },
                { day: 20, available: false },
                { day: 21, available: false },
                { day: 22, available: true },
            ]))
    });
})

