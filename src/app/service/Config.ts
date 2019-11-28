export class Config {

  // public static SERV_URL = 'http://localhost:62079';
  // public static SERV_URL = 'https://191.242.162.188:62079';
  public static SERV_URL = 'https://moacircosta.tech:62079';

  public static centralDeTratamentoDeErros(error): string {
    switch (error) {
        case 500:
          return 'Falha no servidor.';
          break;
        case 400:
          return 'Falha na requisição.';
          break;
        case 401:
          return 'Acesso negado!';
          break;
        case 201:
          return 'Registro efetuado com sucesso!';
          break;
        case 409:
          return 'Email já registrado, por gentileza, tente novamente com outro email.';
          break;
    }
  }

}
