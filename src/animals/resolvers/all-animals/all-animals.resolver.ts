import { animalRepository } from '../../repository/animal.repository';

export const allAnimalsResolver = () => animalRepository.findAll();
