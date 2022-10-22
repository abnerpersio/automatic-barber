type Params = {
  html: string;
  subject: string;
};

export class MailBuilder {
  private html: string;
  private subject: string;

  constructor(params: Params) {
    this.html = params.html;
    this.subject = params.subject;
    return this;
  }

  replaceVariables(variables: Record<string, string>) {
    this.html = this.replaceElements(this.html, variables);
    this.subject = this.replaceElements(this.subject, variables);
    return this;
  }

  build() {
    return { html: this.html, subject: this.subject };
  }

  private replaceElements(input: string, variables: Record<string, string>) {
    let result = input;

    const matches = result.matchAll(/{{(?<variable>\w+)}}/g);

    for (const { groups } of Array.from(matches)) {
      const variable = groups?.variable as string;
      result = result.replace(`{{${variable}}}`, variables[variable]);
    }

    return result;
  }
}
