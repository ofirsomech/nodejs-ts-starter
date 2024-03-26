interface ResponseModel<T> {
    statusCode: number;
    error?: string;
    message?: string;
    data?: T;
  }