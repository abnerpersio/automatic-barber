import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENGRID_API_KEY as string);

export const sendgrid = sgMail;

export const sendgridOptions = {
  fromMail: process.env.SENGRID_FROM_MAIL as string,
};
