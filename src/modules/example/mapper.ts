import { Example } from "./models/exampleModel";
import { ExampleDTO } from "./models/dtos/exampleDTO";

export const mapToExampleDTO = (example: Example): ExampleDTO => {
    return {
        id: example.id,
        name: example.name,
        description: example.description
    };
}