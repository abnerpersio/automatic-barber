import { Request, Response } from 'express';

type Params = {
  name: string;
  email: string;
  service: string;
  day: string;
  hour: string;
};

export class RegisterUseCase {
  execute = async (req: Request<unknown, unknown, Params>, res: Response) => {
    const { day, email, hour, name, service } = req.body;

    if (!day || !email || !hour || !name || !service) return res.render('error');

    return res.render('success');
  };
}
