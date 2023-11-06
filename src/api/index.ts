import axios from 'axios';
import { HeroProps } from '@/store/heroesStore';

const getHeroes = async (): Promise<Array<HeroProps>> => {
  const response = await axios.get(
    'https://homologacao3.azapfy.com.br/api/ps/metahumans',
    {},
  );
  return response.data;
};

export default getHeroes;
