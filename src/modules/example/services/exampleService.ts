import { Example } from '../models/exampleModel';
import { createDataSource } from '../../../../typeormConfig';
import { ExampleCreateDTO, ExampleUpdateDTO } from '../models/dtos/exampleDTO';
import { ErrorHandler } from '../../../shared/models/errors/ErrorHandler.model';

const appDataSource = createDataSource();
const exampleRepository = appDataSource.getRepository(Example);

export const getAllExamples = async (): Promise<Example[]> => {
    try {
        return await exampleRepository.find();
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(500, `Failed to get all examples: ${error.message}`);
    }
};

export const createExample = async (exampleData: ExampleCreateDTO): Promise<Example | null> => {
    try {
        const example: Example = exampleRepository.create(exampleData);
        return await exampleRepository.save(example);
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(500, `Failed to create example: ${error.message}`);
    }
};

export const getExampleById = async (id: number): Promise<Example | null> => {
    try {
        const example = await exampleRepository.findOneOrFail({ where: { id: id } });
        console.log("example");
        console.log(example);

        if (!example) {
            throw new ErrorHandler(404, 'Example with this id not found');
        }
        return example;
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(500, 'test error');
    }
};

export const updateExample = async (id: number, exampleData: ExampleUpdateDTO): Promise<Example | null> => {
    try {
        await exampleRepository.update(id, exampleData);
        return await exampleRepository.findOne({ where: { id: id } });
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(500, `Failed to update example: ${error.message}`);
    }
};

export const deleteExample = async (id: number): Promise<void> => {
    try {
        await exampleRepository.delete(id);
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(500, `Failed to delete example: ${error.message}`);
    }
};
