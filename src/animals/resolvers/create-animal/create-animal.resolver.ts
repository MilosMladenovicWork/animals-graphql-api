import { convertJsDateToUnix } from '../../../common/util/convert-js-date-to-unix';
import { animalsData } from '../../data/animals.data';

export const createAnimalResolver = (_obj: any, { name }: { name: string }) => {
  const biggestId = animalsData.animals[animalsData.animals.length - 1]?.id;
  const id = biggestId !== undefined ? biggestId + 1 : 1;

  const animal = {
    id,
    name,
    dateCreated: convertJsDateToUnix({ date: new Date() }),
  };

  animalsData.animals.push(animal);

  return animal;
};
