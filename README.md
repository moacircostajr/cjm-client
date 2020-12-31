[![Build Status](https://travis-ci.org/moacircostajr/cjm-gestor-client.svg?branch=master)](https://travis-ci.org/moacircostajr/cjm-gestor-client)
# cjm-client
Projeto desenvolvido em Angular 7, consistindo numa interface com o usuário final da plataforma de ensino CJM. Consome a API cjm-server-mysql.

## Inicializando

Estas instruções lhe permitirão obter uma cópia do projeto e executá-lo na sua máquina local para desenvolvimento e testes. Veja as notas de compilação para saber como compilar o projeto.

### Pré-requisitos

O framework Angular deve ser instalado globalmente através do comando `npm install -g @angular/cli@7`.

Por se tratar de um cliente, este projeto consome os serviços de uma API. No entanto, para testar e desenvolver esse projeto é possível que a API seja emulada pelo JSON SERVER, um programa que pode ser instalado na sua máquina através no comando `npm install json-server -g`. O comando NPM, por sua vez, pode ser instalado através do comando `sudo apt install nodejs` (no GNU/LINUX distribuição Ubuntu, mas independe de sistema operacional).

Após a instalação das ferramentas mencionadas, devem ser criados os arquivos para emular o banco de dados, seguindo os modelos contidos na pasta `/src/model/` e a [ajuda](https://github.com/typicode/json-server/blob/master/README.md) do Json-Server.


### Instalação

Após o download deste projeto, dentro de sua pasta principal deve ser executado o comando `npm install`, para que seja feito o download e a instalação das dependências do projeto.

Após a instalação das dependências, basta executar os passos informados nas notas a seguir.

## Servidor de desenvolvimento

Execute `ng serve --open` para iniciar o servidor de desenvolvimento. Acesse o endereço web `http://localhost:4200/`. A aplicação será atualizada automaticamente caso seja alterado o código fonte.

Para parar a execução do servidor de desenvolvimento, pressione `Ctrl + C`, no terminal de comando.

## Ferramentas de desenvolvimento

Com o servidor de desenvolvimento parado, execute `ng generate component component-name` para criar um novo componente. Você também pode usar `ng generate appShell|application|class|directive|enum|guard|interface|library|module|pipe|service|serviceWorker|universal`.

## Compilação

Execute `ng build` para compilar o projeto. O projeto compilado poderá ser encontrado no diretório dist/. Use --prod para uma compilação de produção.

## Ajuda

Para obter mais informações sobre o Angular CLI, use `ng --help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Autores

* **Moacir Costa** - *Desenvolvedor inicial*

Veja também a lista de [colaboradores](https://github.com/moacircostajr/cjm-client/graphs/contributors) que participam deste projeto.

## Licença

Este projeto está licenciado sob os termos da GNU General Public License v3.0 - veja [LICENSE.md](https://github.com/moacircostajr/cjm-client/blob/master/LICENSE) para conhecer os detalhes.

## Agradecimentos

* A Jesus Cristo, que me deu coragem e força pra chegar até aqui;
* Ao meu irmão Claudio Costa, que me ensinou os caminhos que eu deveria trilhar para chegar neste nível de conhecimento em programação;
* Ao Tenente Moura, que acreditou no meu potencial e me encorajou a continuar o desenvolvimento deste projeto.

## Status do projeto

* É necessário fazer a validação dos formulários de inserção de informações;
* A ferramenta de testes e sincronização TRAVIS está desconfigurada.
