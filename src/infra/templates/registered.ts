import { TEMPLATES } from '../constants/templates';

export default {
  name: TEMPLATES.SUCESSFULL_REGISTERED,
  params: {
    subject: 'Boa! Seu agendamento foi concluída',
    html: `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Agendamento concluído</title>

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          color: #686868;
          text-align: start;
          font-size: 16px;
        }

        body {
          padding: 0; 
          margin: 0; 
          overflow: auto; 
          height: 100vh; 
          width: 100%;
        }

        h1 {
          font-size: 20px;
        }

        h4 {
          font-size: 18px;
        }

        table {
          width: 100%; 
          max-width: 600px; 
          margin: auto;
        }

        thead {
          background-color: #F2F2F2; 
          height: 150px;
        }

        thead tr {
          height: 150px !important;
        }

        thead tr td {
          color:#3a352a;
          width: 100vw !important;
          text-align: center;
        }

        thead tr td h1 {
          text-align: center;
        }

        tbody {
          width: 100%; 
          max-height: 700px !important;
        }

        .default-padding {
          padding: 0 50px;
        }

        .padding-top-32 {
          padding-top: 32px;
        }

        .padding-top-64 {
          padding-top: 64px;
        }

        .padding-bottom-32 {
          padding-bottom: 32px;
        }

        .padding-bottom-64 {
          padding-bottom: 64px;
        }
      </style>
    </head>
        <body>
          <table>
            <thead>
              <tr>
                <td>
                  <h1>
                    Olá, {{name}}!
                  </h1>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="default-padding padding-top-64">
                  <h4> 
                    Seu agendamento do serviço {{service}} foi registrado.
                  </h4>
                </td>
              </tr>
              <tr>
                <td class="default-padding padding-top-32">
                  <p>
                    <strong>Data:</strong> {{day}}
                  </p>
                  <br />
                  <p>
                    <strong>Horário:</strong> {{hour}}
                  </p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="default-padding padding-top-64">
                  <p>
                    Obrigado por utilizar nosso sistema
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </body>
    </html>
    `,
  },
};
