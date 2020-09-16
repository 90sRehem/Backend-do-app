import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import ListProvidersMonthAvailabilityService from './ListProviderMonthAvailabilityService'

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailabilityService: ListProvidersMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository()
        listProviderMonthAvailabilityService = new ListProvidersMonthAvailabilityService(
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

        const availability = listProviderMonthAvailabilityService.execute({
            provider_id: 'some_id',
            year: 2020,
            month: 5,
        })

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 19, available: true },
                { day: 20, available: false },
                { day: 21, available: true },
                { day: 22, available: true },
            ]),
        );
    });
});


