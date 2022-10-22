import { MailWorker } from '../../workers/mail-worker';
import { logger } from '../config/logger';
import { queueConfig } from '../config/queue';
import { Receiver } from '../queue/receiver';

export class SendMailRunner {
  static run() {
    const target = queueConfig.mailQueue;
    const worker = new MailWorker();
    const receiver = new Receiver(worker, target);

    logger.info(`Listening to queue ${target}`);
    receiver.run();
  }
}
