import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import ListProvidersMonthAvailabilityService from './ListProvidersService'

let fakeUsersRepository: FakeUsersRepository;
let listProviderMonthAvailability: ListProvidersMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        listProviderMonthAvailability = new ListProvidersMonthAvailabilityService()
    })

    it('should be able to list the month availability from providers', async () => {

    });
})

