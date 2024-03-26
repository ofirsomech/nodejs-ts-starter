import { Example } from '../models/exampleModel';
import { ExampleCreateDTO, ExampleUpdateDTO } from '../models/dtos/exampleDTO';
import { createDataSource } from '../../../../typeormConfig';

// Create a new DataSource instance
const appDataSource = createDataSource();
const exampleRepository = appDataSource.getRepository(Example);

export const getAllExamples = async (): Promise<Example[]> => {
    try {
        const exampleRepository = appDataSource.getRepository(Example);
        return await exampleRepository.find();
    } catch (error) {
        throw new Error('Failed to get all examples');
    }
};

export const createExample = async (exampleData: ExampleCreateDTO): Promise<Example | null> => {
    try {
        const example: Example = exampleRepository.create(exampleData);
        return await exampleRepository.save(example);
    } catch (error) {
        throw new Error('Failed to create example');
    }
};

export const getExampleById = async (id: number): Promise<Example | null> => {
    try {
        console.log(id);
        
        return await exampleRepository.findOne({ where: { id: id } });
    } catch (error) {
        throw new Error('Failed to get example by ID');
    }
};

export const updateExample = async (id: number, exampleData: ExampleUpdateDTO): Promise<Example | null> => {
    try {
        await exampleRepository.update(id, exampleData);
        return await exampleRepository.findOne({ where: { id: id } });
    } catch (error) {
        throw new Error('Failed to update example');
    }
};

export const deleteExample = async (id: number): Promise<void> => {
    try {
        await exampleRepository.delete(id);
    } catch (error) {
        throw new Error('Failed to delete example');
    }
};