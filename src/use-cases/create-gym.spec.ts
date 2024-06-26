import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
    beforeEach(() => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new CreateGymUseCase(gymsRepository)
    })


    it('should be able to create gym', async () => {

        const { gym } = await sut.execute({
            title: 'Gym Fit',
            description: 'A melhor academia dos frangos!!',
            phone: '62999999999',
            latitude: -16.6351182,
            longitude: -49.2942842,
        })

        expect(gym.id).toEqual(expect.any(String))
    })
})