import { Body, Get, Path, Route, Tags } from "tsoa";

interface PingResponse {
  message: string;
}

@Tags("ping")
@Route("ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }

  @Get("/:exampleText")
  public async writeMessage(@Path() exampleText: string): Promise<PingResponse> {
    return {
      message: exampleText,
    };
  }
}
