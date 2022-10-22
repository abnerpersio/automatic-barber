import { SendMessageRequest } from 'aws-sdk/clients/sqs';

import { SQS } from '../config/aws';

type Data = {
  target: string;
  data: Record<string, unknown>;
};

export class Sender {
  async dispatch({ data, target }: Data) {
    const params: SendMessageRequest = {
      DelaySeconds: 10,
      MessageBody: JSON.stringify(data),
      QueueUrl: target,
    };

    await SQS.sendMessage(params).promise();
  }
}
