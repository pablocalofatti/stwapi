import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class PeopleService {
  apiRoute = 'https://swapi.dev/api/people/';
  async getPeople(page?: string) {
    try {
      const { data } = await axios.get(
        this.apiRoute + (page ? `?page=${page}` : ''),
      );
      const people = data.results.map((person) => ({
        name: person.name,
        height: person.height,
        mass: person.mass,
      }));
      return { ...data, results: people };
    } catch (error) {
      console.log({ error: error.name, message: error.message });
      throw new HttpException(error.message, error.response.status);
    }
  }

  async getPeopleById(id: string) {
    try {
      const { data } = await axios.get(this.apiRoute + id);
      return {
        name: data.name,
        height: data.height,
        mass: data.mass,
      };
    } catch (error) {
      console.log({ error: error.name, message: error.message });
      throw new HttpException(error.message, error.response.status);
    }
  }
}
