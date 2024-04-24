const statuses = {
  unprocessableContent: 422,
};

class HttpError extends Error {
  constructor(attributes: {
    message: string;
    name: string;
    status: number;
    data: any;
  }) {
    super(attributes.message);

    this.name = attributes.name;
    this.status = attributes.status;
    this.data = attributes.data;

    Error.captureStackTrace(this, HttpError);
  }

  name: string;
  status: number;
  data: any;
}

export class HttpUnprocessableContentError extends HttpError {
  constructor(data: any, message = "Unprocessable Content Error") {
    super({
      message,
      name: "HttpUnprocessableContentError",
      status: statuses.unprocessableContent,
      data,
    });
  }
}
