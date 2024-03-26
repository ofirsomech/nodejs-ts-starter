export interface ExampleDTO {
    id?: number;
    name?: string;
    description?: string;
}

export interface ExampleCreateDTO {
    name: string;
    description: string;
}

export interface ExampleUpdateDTO {
    name?: string;
    description?: string;
}
