// exampleRepository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Example } from '../models/exampleModel';

@EntityRepository(Example)
export class ExampleRepository extends Repository<Example> {
    // Custom methods specific to Example entity can be defined here if needed
}
