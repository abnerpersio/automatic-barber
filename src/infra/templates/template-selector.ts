import registered from './registered';

export type TemplateData = {
  subject: string;
  body: string;
};

export class TemplateSelector {
  static select(templateName: string) {
    switch (templateName) {
      case registered.name:
        return registered.params;

      default:
        throw new Error(`Template ${templateName} not found`);
    }
  }
}
