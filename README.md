# FURIA FanHub Frontend

Frontend da plataforma FURIA FanHub, desenvolvida para oferecer aos fãs da FURIA uma experiência imersiva durante as partidas ao vivo, com chats em tempo real e acompanhamento detalhado dos jogos.

🚀 Funcionalidades

Página inicial:

    Seção “Agora ao vivo”: destaca os jogos que estão em andamento.

    Últimos jogos: exibe os 5 últimos jogos da FURIA.

Página dos Jogos:

    Filtro por campeonato: exibe os jogos da FURIA em cada campeonato.

    Paginação nos jogos gerais: lista todos os jogos da FURIA com suporte à paginação.

    Filtro por data: mostra os jogos da FURIA em uma determinada data.

    Busca por nome do adversário: exibe jogos da FURIA contra um adversário específico.

Página da Partida:

        Banner com dados da partida: exibe informações como nome dos times, placar, mapa, tempo estimado, etc.

        Chat ao lado do banner: permite mensagens em tempo real dos usuários.

🛠️ Tecnologias Utilizadas

    Next.js

    TypeScript

    Tailwind CSS

    Socket.IO: para comunicação em tempo real.

    Axios: para requisições HTTP à API backend.

    Shadcn/ui: estilização de componentes.

📁 Estrutura do Projeto

    src/: Contém os arquivos principais do projeto.

        app/: Páginas e rotas da aplicação.

        assets/: Imagens estáticas.

        components/: Componentes reutilizáveis da interface.

        lib/: Configurações de requests, schemas, etc.

        stores/: Configuração do TeamStore utilizando Zustand para guardar informações da equipe FURIA.

        types/: Configuração dos types do Typescript;

⚙️ Instalação

Clone o repositório:

    git clone https://github.com/GustavoeDev/furia_fanhub_frontend.git
    
    cd furia_fanhub_frontend

Instale as dependências:

    npm install

Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis:

    NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

Inicie o servidor de desenvolvimento:

    npm run dev

    A aplicação estará disponível em http://localhost:3000.

🔗 Integração com o Backend

Este frontend consome a API do projeto [furia_fanhub_backend](https://github.com/GustavoeDev/furia_fanhub_backend). Certifique-se de que o backend esteja em execução e acessível na URL definida na variável NEXT_PUBLIC_API_URL.
