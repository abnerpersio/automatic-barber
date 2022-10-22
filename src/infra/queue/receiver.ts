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
  async run(worker: Worker, target: string, options?: Options) {
    const consumer = Consumer.create({
      sqs: SQS,
      queueUrl: target,
      handleMessage: async (message) => {
        try {
          logger.info({ body: message.Body }, `Processing message at ${target}`);
          await worker.execute(message.Body);
        } catch (error) {
          logger.error(
            { message: (error as Error).message, body: message.Body },
            `Error processing at ${target}`,
          );
        }
      },
    });

    consumer.start();
  }
}
