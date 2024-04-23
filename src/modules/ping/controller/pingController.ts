import { Body, Get, Path, Route, Tags } from "tsoa";

interface PingResponse {
  message: string;
}

@Tags("ping")
@Route("ping")
export default class PingController {
  @Get("/getTest")
  public async getTest(): Promise<PingResponse> {
    const a = 2;

    return {
      message: "hello" + a,
    };

  }

  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    const a = 2;

    return {
      message: "hello" + a,
    };

  }

  @Get("/:exampleText")
  public async writeMessage(@Path() exampleText: string): Promise<PingResponse> {
    return {
      message: exampleText,
    };
  }
}
