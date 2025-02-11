# TO DO LIST

## Teste Técnico - Desenvolvedor Web Júnior
## Repositório responsável pela aplicação to-do list

### Funcionalidades implementadas:

- Adicionar tarefas na tabela to do.
- Transferir tarefas da tabela to do para done quando feitas.
- Remover tarefas da tabela done permanentemente.
- Salvamento dos dados das tabelas no Local Storage.
- Funcionalidade para ver as tabelas to do e done.
- Funcionalidade para ver apenas to do.
- Funcionalidade para ver apenas done.
- Funcionalidade para dark mode e white mode com transições suaves.
- Responsividade para dispositivos mobile, tablets, iPads, telas pequenas, médias e grandes com media query, flexbox e medidas como rem e %.
- Tratamento dos dados inseridos para evitar tasks vazias.

### Decisões técnicas tomadas durante o desenvolvimento:

- Desenvolvi como primeiro modelo a versão mobile da aplicação, para que assim pudesse começar a desenvolver todas funcionalidades com um layout agradável.
- Optei por guardar as mensagens de ambas tabelas (to do e done) em arrays separados. Elas são anuladas da tela com innerHTML = "" e atualizados na tela com createElement sempre que uma alteração é feita em qualquer array. Capturo as task com um eventListner para saber o index para exclusão / remoção.
- O dark / white mode e função de abrir e fechar menu lateral do mobile foram implementados fazendo testes com booleanos. Além disso, foi necessário fazer testes lógicos intermediários na aplicação do DOM nos componentes, para que não houvesse conflito com as cores dos componentes quando estavam ou não em dark mode e era aberto o menu lateral.
- Na finalização do projeto, comentei todas funcionalidades lógicas e aspectos importantes para que haja bom entendimento. Mudei também a linguagem da tela, funções, variáveis e mais para inglês, mantendo uma acessibilidade global e padronizando melhor o código.
- Primariamente, para manter a organização do código e melhor entendimento, a ideia seria separar a lógica em três arquivos: color mode (dark mode / white mode), funcionalidade dos botões (botão lateral, botões de ver conteúdo específico, etc.) e inserção / remoção de conteúdo nos array e local storage. Entretanto, devido a problemas com dependências de conteúdo de scrips diferentes, acabei optando por manter todo script no mesmo arquivo, mas separado e explicado por comentários.
- A aplicação foi desenvolvida em duas branch diferentes para manter a organização e boas práticas com o GitHub, sendo elas: feature/01, para desenvolvimento geral da aplicação e feature/02, para responsividade e afins.

### Melhorias futuras para o projeto:

- Função para remover uma task da tabela to do direto para exclusão, invés de ter que passar pela tabela done.
- Adição de data e hora da criação dos cards.
- Aprimorar a responsividade para desktop, para preencher melhor o espaço de tela, encaixando melhor os cards com uso de grid css.
- Faria um aprimoramento no código adicionando um framework como Vue.js, principalmente para criar cards mais dinamicamente com o v-for nos componentes html.
- Adição de um input de pesquisa para as task independente de que tabela esteja.
- Aprimoraria o input de inserir task para ser semelhante a um componente task depois de criado, para deixar mais interativo e bem trabalhado.

[Link da aplicação no ar!](https://davi-rdgr.github.io/Teste-Tecnico---Desenvolvedor-Web-Junior/)
