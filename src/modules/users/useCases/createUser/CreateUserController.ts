import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;
    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute({ email, name }));
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { CreateUserController };
