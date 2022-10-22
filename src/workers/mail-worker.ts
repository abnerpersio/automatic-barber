import { TemplateSelector } from '../infra/templates/template-selector';
import { Worker } from '../infra/types/worker';
import { MailBuilder } from '../lib/mail-builder';
import { MailSender } from '../lib/mail-sender';

type Data = {
  template: string;
  params: {
    name: string;
    email: string;
    service: string;
    day: string;
    hour: string;
  };
};

export class MailWorker implements Worker<Data> {
  async execute(data: Data) {
    const { template: templateName, params } = data;
    const { email: recipient, ...variables } = params;

    const template = TemplateSelector.select(templateName);
    const { html, subject } = new MailBuilder(template).replaceVariables(variables).build();

    await new MailSender({ html, subject, recipient }).send();
  }
}
