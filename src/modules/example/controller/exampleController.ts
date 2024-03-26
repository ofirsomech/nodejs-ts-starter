import { Body, Get, Post, Put, Delete, Route, Tags, Path } from "tsoa";
import { Example } from "../models/exampleModel";
import { ExampleCreateDTO, ExampleDTO, ExampleUpdateDTO } from "../models/dtos/exampleDTO";
import { getAllExamples, createExample, getExampleById, updateExample, deleteExample } from "../services/exampleService";
import { mapToExampleDTO } from "../mapper";


@Tags("Examples")
@Route("examples")
export class ExampleController {
    @Get()
    public async getAll(): Promise<Example[]> {
        try {
            const examples: Example[] = await getAllExamples();
            return examples;
        } catch (error) {
            throw { statusCode: 500, message: "Internal Server Error" };
        }
    }

    @Post()
    public async create(@Body() requestBody: ExampleCreateDTO): Promise<ExampleDTO> {
        try {
            const example: Example | null = await createExample(requestBody);
            return mapToExampleDTO(example!);
        } catch (error: any) {
            throw { statusCode: 500, message: error.message || "Internal Server Error" };
        }
    }

    @Get("/{id}")
    public async getById(@Path() id: number): Promise<ExampleDTO> {
        try {
            console.log(id);
            
            const example: Example | null = await getExampleById(id);
            return mapToExampleDTO(example!);
        } catch (error) {
            console.log(error);
            
            throw { statusCode: 404, message: "Example not found" };
        }
    }

    @Put("/{id}")
    public async update(@Path() id: number, @Body() requestBody: ExampleUpdateDTO): Promise<ExampleDTO> {
        try {
            const example: Example | null= await updateExample(id, requestBody);
            return mapToExampleDTO(example!);
        } catch (error: any) {
            throw { statusCode: 500, message: error.message || "Internal Server Error" };
        }
    }

    @Delete("{id}")
    public async delete(@Path() id: number): Promise<void> {
        try {
            await deleteExample(id);
        } catch (error: any) {
            throw { statusCode: 500, message: error.message || "Internal Server Error" };
        }
    }
}