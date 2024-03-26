import { Body, Get, Path, Route, Tags } from "tsoa";

interface PongResponse {
  message: string;
}

@Tags("pong")
@Route("pong")
export default class PongController {
  @Get("/")
  public async getMessage(): Promise<PongResponse> {
    return {
      message: "hello",
    };
  }

  @Get("/:exampleText")
  public async writeMessage(@Path() exampleText: string): Promise<PongResponse> {
    return {
      message: exampleText,
    };
  }
}
