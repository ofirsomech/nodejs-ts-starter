import { Body, Get, Post, Put, Delete, Route, Tags, Path } from "tsoa";
import { mapToExampleDTO } from "../mapper";
import { Example } from "../models/exampleModel";
import { ExampleCreateDTO, ExampleDTO, ExampleUpdateDTO } from "../models/dtos/exampleDTO";
import { getAllExamples, createExample, getExampleById, updateExample, deleteExample } from "../services/exampleService";

@Tags("Examples")
@Route("examples")
export class ExampleController {
    @Get()
    public async getAll(): Promise<Example[]> {
        const examples = await getAllExamples();
        return examples;
    }

    @Post()
    public async create(@Body() requestBody: ExampleCreateDTO): Promise<ExampleDTO> {
        const example = await createExample(requestBody);
        return mapToExampleDTO(example!);
    }

    @Get("/{id}")
    public async getById(@Path() id: number): Promise<ExampleDTO> {
        const example = await getExampleById(id);
        return mapToExampleDTO(example!);

    }

    @Put("/{id}")
    public async update(@Path() id: number, @Body() requestBody: ExampleUpdateDTO): Promise<ExampleDTO> {
        const example = await updateExample(id, requestBody);
        return mapToExampleDTO(example!);
    }

    @Delete("/{id}")
    public async delete(@Path() id: number): Promise<void> {
        await deleteExample(id);
    }
}
