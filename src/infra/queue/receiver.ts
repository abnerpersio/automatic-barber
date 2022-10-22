import { Consumer } from 'sqs-consumer';

import { SQS } from '../config/aws';
import { logger } from '../config/logger';
import { Worker } from '../types/worker';

type Options = {
  retry?: {
    maxRetries: number;
    delayInMs: number;
  };
};

export class Receiver {
  constructor(private readonly worker: Worker, private readonly target: string) {}

  async run() {
    const consumer = Consumer.create({
      sqs: SQS,
      queueUrl: this.target,
      handleMessage: async (message) => {
        const body = this.formatBody(message.Body);
        logger.info({ body }, `Processing message at ${this.target}`);

        try {
          await this.worker.execute(body);
        } catch (error) {
          logger.error(
            { message: (error as Error).message, body },
            `Error processing at ${this.target}`,
          );
        }
      },
    });

    consumer.start();
  }

  private formatBody(body?: string) {
    if (!body) return {};
    try {
      return JSON.parse(body);
    } catch (_e) {
      return {};
    }
  }
}
