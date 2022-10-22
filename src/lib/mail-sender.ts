import { logger } from '../infra/config/logger';
import { sendgrid, sendgridOptions } from '../infra/config/sendgrid';

type Params = {
  recipient: string;
  html: string;
  subject: string;
};

export class MailSender {
  private readonly html: string;
  private readonly recipient: string;
  private readonly subject: string;

  constructor(params: Params) {
    this.html = params.html;
    this.recipient = params.recipient;
    this.subject = params.subject;
  }

  async send() {
    logger.info({ to: this.recipient, html: this.html }, 'Sending mail with sendgrid');

    const result = await sendgrid.send({
      from: sendgridOptions.fromMail,
      to: this.recipient,
      subject: this.subject,
      html: this.html,
    });
  }
}
