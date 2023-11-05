import { HeroProps } from '@/store/heroesStore';

function sortObjectsByStringMatch(
  arr: Array<HeroProps>,
  searchString: string,
): Array<HeroProps> {
  const matchingObjects = arr.filter((obj) =>
    obj.name.toLowerCase().includes(searchString),
  );
  const nonMatchingObjects = arr.filter(
    (obj) => !obj.name.toLowerCase().includes(searchString),
  );

  return matchingObjects.concat(nonMatchingObjects);
}

export default sortObjectsByStringMatch;
