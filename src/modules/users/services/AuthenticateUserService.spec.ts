import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AuthenticateUserService from './AuthenticateUserService'
import CreateUserService from './CreateUserService'

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUsers', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository()
        fakeHashProvider = new FakeHashProvider()

        createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        )
        authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider
        )
    })
    it('should be able to authenticate', async () => {
        const user = await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456'
        })

        const reponse = await authenticateUser.execute({
            email: 'johndoe@example.com',
            password: '123456'
        })
        expect(reponse).toHaveProperty('token')
        expect(reponse.user).toEqual(user)
    });
})

describe('AuthenticateUsers', () => {
    it('should not be able to authenticate with non existing user', async () => {
        await expect(authenticateUser.execute({
            email: 'johndoe@test.com',
            password: '123456'
        })).rejects.toBeInstanceOf(AppError)
    });
})

describe('AuthenticateUsers', () => {
    it('should not be able to authenticate with wrong password', async () => {
        await authenticateUser.execute({
            // name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456'
        })

        await expect(authenticateUser.execute({
            email: 'johndoe@example.com',
            password: '1234567'
        })).rejects.toBeInstanceOf(AppError)
    });
})