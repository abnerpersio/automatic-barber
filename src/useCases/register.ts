import { Request, Response } from 'express';

import { queueConfig } from '../infra/config/queue';
import { TEMPLATES } from '../infra/constants/templates';
import { Sender } from '../infra/queue/sender';

type Data = {
  name: string;
  email: string;
  service: string;
  day: string;
  hour: string;
};

export class RegisterUseCase {
  private readonly REQUIRED_FIELDS = {
    name: 'string',
    email: 'string',
    service: 'string',
    day: 'string',
    hour: 'string',
  };

  execute = async (req: Request<unknown, unknown, Data>, res: Response) => {
    const params = req.body;

    for (const [field, type] of Object.entries(this.REQUIRED_FIELDS)) {
      if (!(params as Record<string, string>)[field]) return res.render('error');
      if (typeof (params as Record<string, string>)[field] !== type) return res.render('error');
    }

    const sender = new Sender();
    const target = queueConfig.mailQueue;
    await sender.dispatch({
      data: {
        template: TEMPLATES.SUCESSFULL_REGISTERED,
        params,
      },
      target,
    });

    return res.render('success');
  };
}
