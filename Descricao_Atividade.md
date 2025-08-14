Turma: 3A2, 2025
Treinamento e Revisão - Prova Final Prática
Prof. D. Reis
Uma fábrica de software, a fim de aumentar o relacionamento e engajamento entre os funcionários, decidiu contratar você para desenvolver um sistema que permita seus funcionários interagirem entre si, construindo novas amizades na empresa. A empresa acredita que as amizades no ambiente de trabalho fortalecem o engajamento e motiva seus funcionários a construir soluções mais inovadoras. Após algumas reuniões com você, acordou-se:
Entendimento e necessidades do Contexto
Existirá o conceito de "Perfil do funcionário", que concentra alguns dados do funcionário e dados das interações entre esse funcionário com outros.
O sistema deve permitir que um funcionário curta outro funcionário, tal que:
O
Um funcionário não deve ser capaz de curtir a si mesmo.
Quando um funcionário F1 (Ex: Ana) curte um funcionário F2 (Ex: João), então João pertencerá à lista de curtidas de Ana.
Entende-se amizade entre Ana e João para o sistema, quando João curte Ana e Ana curte João.
Permitir que o perfil de um funcionário envie mensagem para outro perfil de funcionário. Existem dois tipos de mensagens que os funcionários podem receber: "Mensagem Pública" e "Mensagem Privada". As mensagens públicas aparecem no perfil do funcionário, mas as mensagens privadas não. Em suma, um Perfil de um funcionário pode acessar outro Perfil, apresentando suas informações públicas (dados do funcionário e suas mensagens públicas).
O sistema deve permitir que uma mensagem pública, possa ser curtida por algum perfil de funcionário.
Implementação e Critérios de Implementação
1) Criar na pasta Models/Interface a interface "IMensagem”, que define os atributos e
   métodos:
   idFROM (que representa o id daquele funcionário que envia a mensagem) idTO (que representa o id daquele funcionário que está recebendo a mensagem)
   mensagem (conteúdo textual da mensagem).
   um método "exibirMensagem(id Leitor:number):string", em que o idLeitor é o id do funcionário que está tentando ler as mensagens.
2) Criar na pasta Models uma classe "Mensagem Publica” que implementa a interface
   "IMensagem".
   Implementar o método "exibirMensagem (idLeitor: number):string" que retorna uma string na seguinte forma: "De <idTO>: <mensagem>, disse <idFROM>.”. Ex: "De 3: Você é uma excelente pessoa, disse 1." Como a mensagem é pública, o idLeitor deve ser ignorado.
3) Criar na pasta Models uma classe "Mensagem Privada" que implementa a interface
   "IMensagem".
   Implementar o método "exibirMensagem(idLeitor:number):string" que retorna uma string na seguinte forma: “De <idTO>: <mensagem>, disse <idFROM>.”. Ex: "De 3: Você é uma excelente pessoa, disse 1." Como a mensagem é PRIVADA, o método só deverá retornar a string se o parâmetro idLeitor for igual ao idTO da mensagem em questão. No caso de não ser igual, deve retornar: "A mensagem é privada para esse leitor."
4) Criar na pasta Models/Interface a interface "IMensageria” que define os seguintes
   atributos e métodos:
   um atributo chamado “mensagensPublicas" que é um array de objetos da classe "MensagemPublica”.
   um atributo chamado "mensagens Privadas" que é um array de objetos da classe "MensagemPrivada".
   um método chamado "enviarMensagemPublica(perfilFunc: PerfilFuncionario, mensagem:MensagemPublica):void❞
   um método chamado “enviarMensagemPrivada(perfilFunc: PerfilFuncionario, mensagem:Mensagem Privada):void❞
5) Criar na pasta Models a classe "PerfilFuncionario" com os seguintes atributos:
   ⚫ id, representando o identificador do perfil do funcionário.
   nome do funcionário que será exibido em seu perfil. cargo do funcionário que será exibido em seu perfil. descrição que será exibido em seu perfil.
   quantAnosEmpresa, que representa a quantidade de anos desse funcionário na empresa.
6) Fazer com que a classe Perfil Funcionario implemente a interface IMensageria:
   Implementar o método enviar MensagemPublica(perfilFunc: Perfil Funcionario, mensagem:Mensagem Publica):void, em que o funcionário em questão vai enviar uma mensagem para o perfil do parâmetro (perfilFunc), isto é, adicionar o objeto mensagem na lista de mensagens PÚBLICAS de perfilFunc.
   Implementar o método enviar Mensagem Privada (perfilFunc: PerfilFuncionario, mensagem:Mensagem Privada):void, em que o funcionário em questão vai enviar uma mensagem para o perfil do parâmetro (perfilFunc), isto é, adicionar o objeto mensagem na lista de mensagens PRIVADAS de perfilFunc.
7) Criar na pasta Models/Interface a interface ICurtivel, definindo os seguintes atributos
   e métodos:
   um atributo chamado "curtidas" que é um array de objetos da classe "PerfilFuncionario".
   um método chamado serCurtida Por(perfilFunc: PerfilFuncionario):void.
8) Fazer com que a classe Mensagem Publica implemente a interface ICurtivel:
   • Implementar o método serCurtida Por(perfilFunc: PerfilFuncionario):void, em que é adicionado o perfil Func no array de curtidas da mensagem em questão.
9) Fazer com que a classe PerfilFuncionario implemente a interface ICurtivel:
   Implementar o método serCurtida Por(perfilFunc: PerfilFuncionario):void, em que é adicionado o perfilFunc no array de curtidas do perfil do funcionário em questão.
10) Criar os repositórios necessários para recuperar/manipular os dados da bases JSON
    presentes em /database.
11) Criar os serviços necessários para cumprir as regras de negócio e os requisitos da
    aplicação, assim como realizar a simulação de:
    um perfil curtir um outro perfil.
    curtir uma mensagem pública.
    enviar uma mensagem pública para um funcionário.
    enviar uma mensagem privada para um funcionário.
    dado um perfil, recuperar todos os seus amigos.
    dado um perfil, recuperar todos aqueles que curtiram esse perfil e fazer com que ele curta de volta. 
