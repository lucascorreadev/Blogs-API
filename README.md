# 👋🏻 Bem vindo ao projeto API de Blogs! 

man_technologist O que foi desenvolvido

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog, usando a aplicação em Node.js e o pacote sequelize para fazer um CRUD de posts.

    ✔ Foi desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

    ✔ Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post;

    ✔ Será necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.



# Requisitos Desenvolvidos

<details>
     <summary><strong>Os seguintes requisitos foram desenvolvidos</strong></summary>
 
## 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

- Esse teste fará uma conexão no banco utilizando a configuração de teste do arquivo `src/config/config.js`;
- Suas `migrations` devem estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Suas `migrations` devem respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Todas as tabelas e colunas devem estar em `snake_case` 

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

  * **[Será validado que é possível fazer um INSERT e um SELECT na tabela users]**
    - O avaliador irá inserir um dado de exemplo na tabela `users`;
    - O avaliador irá fazer um select, desse mesmo dado, na tabela `users`.

  * **[Será validado que é possível fazer um INSERT e um SELECT na tabela categories]**
    - O avaliador irá inserir um dado de exemplo na tabela `categories`;
    - O avaliador irá fazer um select, desse mesmo dado, na tabela `categories`.

  * **[Será validado que, a partir de um INSERT em users, é possível fazer um INSERT e um SELECT na tabela blog_posts]**
    - Dado que `blog_posts` possui **uma chave estrangeira** `user_id`:
      - O avaliador irá inserir um dado de exemplo na tabela `users`;
    - Desse modo:
      - O avaliador irá inserir um dado de exemplo na tabela `blog_posts`;
      - O avaliador irá fazer um select, desse mesmo dado, na tabela `blog_posts`.

  * **[Será validado que, a partir de INSERTs em users, categories e blog_posts, é possível fazer um INSERT e um SELECT na tabela posts_categories]**
    - Dado que `posts_categories` possui **uma chave primária composta de duas chaves estrangeiras**, respectivamente, `post_id`, `category_id`:
      - O avaliador irá inserir um dado de exemplo na tabela `users`;
      - O avaliador irá inserir um dado de exemplo na tabela `categories`;
      - O avaliador irá inserir um dado de exemplo na tabela `blog_posts`;
    - Desse modo:
      - O avaliador irá inserir um dado de exemplo na tabela `posts_categories`;
      - O avaliador irá fazer um select, desse mesmo dado, na tabela `posts_categories`.

<br />
</details>

---

## 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

  * **[Será validado que existe o arquivo 'User.js']**

  * **[Será validado que o modelo possui o nome 'User']**

  * **[Será validado que o modelo possui a propriedade 'id']**

  * **[Será validado que o modelo possui a propriedade 'display_name']**

  * **[Será validado que o modelo possui a propriedade 'email']**

  * **[Será validado que o modelo possui a propriedade 'password']**

  * **[Será validado que o modelo possui a propriedade 'image']**

<br />
</details>

---

## 3 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

  * **[Será validado que não é possível fazer login sem todos os campos preenchidos]**
    - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

  * **[Será validado que não é possível fazer login com um usuário que não existe]**
    - Se a requisição receber um par de `email` e `password` errados/inexistentes, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Invalid fields"
    }
    ```
  
  * **[Será validado que é possível fazer login com sucesso]**
    - Se o login foi feito com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```
    > :warning: O token anterior é fictício, seu token deve ser gerado a partir da variável de ambiente `JWT_SECRET`, do `payload` da requisição e não deve conter o atributo `password` em sua construção.

<br />
</details>

---

## 4 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que não é possível cadastrar com o campo `displayName` menor que 8 caracteres]**
    - Se a requisição não tiver o campo `displayName` devidamente preenchido com 8 caracteres ou mais, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
    ```
  
  * **[Será validado que não é possível cadastrar com o campo `email` com formato inválido]**
    - Se a requisição não tiver o campo `email` devidamente preenchido com o formato `<prefixo@dominio>`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"email\" must be a valid email"
    }
    ```

  * **[Será validado que não é possível cadastrar com o campo `password` menor que 6 caracteres]**
    - Se a requisição não tiver o campo `password` devidamente preenchido com 6 caracteres ou mais, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
    ```

  * **[Será validado que não é possível cadastrar com um email já existente]**
    - Se a requisição enviar o campo `email` com um email que já existe, o resultado retornado deverá ser conforme exibido abaixo, com um status http `409`:
    ```json
    {
      "message": "User already registered"
    }
    ```
  
  * **[Será validado que é possível cadastrar um pessoa usuária com sucesso]**
    - Se o user for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
      ```
    > :warning: O token anterior é fictício, seu token deve ser gerado a partir da variável de ambiente `JWT_SECRET`, do `payload` da requisição e não deve conter o atributo `password` em sua construção.

<br />
</details>

---

## :warning: Validando token nas requisições

- Após termos feito o requisito de criação de `users` e o requisito de `login`, alguns requisitos abaixo vão precisar desta autenticação prévia, para que seja possível consumir o endpoint;
- Todo requisito que precisar validar o `token` terá o símbolo ☝;
- **✨ Dica:** Se é algo que vamos utilizar em mais de uma rota, será que podemos separa-lo em algum lugar que comece com `M` de `middleware`? 😜

<details>
  <summary id="validandoToken"><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que não é possível fazer uma operação sem o token na requisição]**
    - Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
    ```json
    {
      "message": "Token not found"
    }
    ```

  * **[Será validado que não é possível fazer uma operação com o token inválido]**
    - Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
    ```json
    {
      "message": "Expired or invalid token"
    }
    ```

</details>

---

## 5 - Sua aplicação deve ter o endpoint GET `/user`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que é possível listar todos os usuários]**
    - Ao listar usuários com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },

      /* ... */
    ]
    ```

<br />
</details>

---

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que é possível listar um usuário específico com sucesso]**
    - Ao listar um usuário com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    }
    ```

  * **[Será validado que não é possível listar um usuário inexistente]**
    - Se o usuário for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
    {
      "message": "User does not exist"
    }
    ```

<br />
</details>

---

## 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que existe o arquivo 'Category.js']**

  * **[Será validado que o modelo possui o nome 'Category']**

  * **[Será validado que o modelo possui a propriedade 'id']**

  * **[Será validado que o modelo possui a propriedade 'name']**

<br />
</details>

---

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que não é possível cadastrar uma categoria sem o campo `name`]**
    - Se a requisição não tiver o campo `name` devidamente preenchidos(não pode haver campo em branco), o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"name\" is required"
    }
    ```

  * **[Será validado que é possível cadastrar uma categoria com sucesso]**
    - Se a categoria for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
    ```json
    {
      "id": 3,
      "name": "Typescript"
    }
    ```

<br />
</details>

---

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que é possível listar todas as categoria com sucesso]**
    - Ao listar categorias com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },

      /* ... */
    ]
    ```

<br />
</details>

---

## 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:1)* com o modelo `User`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

- **✨ Dica:**
  - Explore como renomear campos no Sequelize;

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que existe o arquivo 'BlogPost.js']**

  * **[Será validado que o modelo possui o nome 'BlogPost']**

  * **[Será validado que o modelo possui a propriedade 'id']**

  * **[Será validado que o modelo possui a propriedade 'title']**

  * **[Será validado que o modelo possui a propriedade 'content']**

  * **[Será validado que o modelo possui a propriedade 'user_id']**

  * **[Será validado que o modelo possui a propriedade 'published']**

  * **[Será validado que o modelo possui a propriedade 'updated']**

  * **[Será validado que o modelo em 'BlogPost.js', define a associação 'belongsTo', com a entidade de nome 'User']**

  * **[Será validado que o modelo em 'User.js', define a associação 'hasMany', com a entidade de nome 'BlogPost']**

<br />
</details>

---

## 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:N)* entre o modelo `BlogPost` e o modelo `Category`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>


<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que existe o arquivo 'PostCategory.js']**

  * **[Será validado que o modelo possui o nome 'PostCategory']**

  * **[Será validado que o modelo possui a propriedade 'post_id']**

  * **[Será validado que o modelo possui a propriedade 'category_id']**

  * **[Será validado que o modelo em 'PostCategory.js', através do(s) modelos(s) de nome(s) 'Category; BlogPost', define a associação 'belongsToMany' respectivamente, com o(s) modelo(s) de nome(s) 'BlogPost, Category']**

<br />
</details>

---

## 12 - Sua aplicação deve ter o endpoint POST `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
  

- **✨ Dicas:**
  - Explore outros [find na documentação do Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall);
  - Explore outros [insert na documentação do Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk);
  - Explore a [seção 6 - Dia 03: ORM - Associations N:N e Transactions - Transações](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/a46df24c-0175-49d4-8557-bdcd947eb168), essa seção vai deixar suas aplicações com mais confiablidade e atomicidade, quando o assunto for transações de banco de dados;

<details>
  <summary id="requisito12"><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que não é possível cadastrar sem todos os campos preenchidos]**
    - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

  * **[Será validado que não é possível cadastrar um blog_post com uma `categoryIds` inexistente]**
    - Se a requisição **não** tiver o campo `categoryIds` devidamente preenchido com um array com **todas** as categorias existentes, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400``:
    ```json
    {
      "message": "one or more \"categoryIds\" not found"
    }
    ```

  * **[Será validado que é possível cadastrar um blog_post com sucesso]**
  - Se o blog post for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:
  ```json
  {
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 1,
    "updated": "2022-05-18T18:00:01.196Z",
    "published": "2022-05-18T18:00:01.196Z"
  }
  ```

<br />
</details>

---

## 13 - Sua aplicação deve ter o endpoint GET `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que é possível listar blogpost com sucesso]**
    - Ao listar posts com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
    ```

<br />
</details>

---

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

  * ☝ **[Será validado o token, como descrito na seção de [Validando token nas requisições](#validandoToken)]**

  * **[Será validado que é possível listar um blogpost com sucesso]**
    - Ao listar um post com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
          {
              "id": 1,
              "name": "Inovação"
          }
      ]
    }
    ```

  * **[Será validado que não é possível listar um blogpost inexistente]**
    - Se o post for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:
    ```json
    {
      "message": "Post does not exist"
    }
    ```

<br />
</details>

--
    
</details>
    
    
# 🛠 Execução de testes localmente
    
<details>
   <summary><strong>🛠 Execução de testes localmente</strong></summary>
  
  - O teste local deve rodar o script `npm run start:test`, que vai iniciar e depois encerrar, em segundo plano **outra instância da sua API, na porta `3030`**. Dessa forma, o teste conseguira consumir sua API e validar os requisitos.
    - Caso seu computador não suporte rodar um servidor extra para os testes, execute um servidor na porta 3001 e rode o script `npm run test:dev`, este não vai criar outra instância, mas vai esperar um servidor na porta 3001. 

  - Sua API deve estar funcionando minimamente para que o teste comece, dado que ele aguarda o estabelecimento da mesma para começar o teste.

  - Todos os testes **vão gerar e consumir um banco de dados próprio com final `*-test`**, que é gerado através da configuração do arquivo `src/config/config.js`.

  - Isso vai garantir que durante seu desenvolvimento, o teste não manipule ou derrube sua API na porta padrão (`3001`) ou seu banco de dados padrão (final `*-dev`), isolando os mesmos.

  - Caso ocorra algum problema, encerre o teste com `[CTRL] + [C]` e utilize o script `npm run kill:test`

  ---

  O teste local já é configurado, internamente, com a variável de ambiente `NODE_ENV=test` para indicar o banco a ser utilizado pelo Sequelize, o que deve resultar na criação de um banco, somente para o teste:

  ![sequelize test](./public/sequelize-02.png)

  Sem essa variável (modo padrão de desenvolvimento), sua API deve resultar algo como:

  ![sequelize development](./public/sequelize-01.png)

  ---

  > :information_source: Scripts para executar os testes locais:

  Vamos usar o Jest para executar os testes, use o comando a seguir para executar todos os testes: 

  ```sh
  npm test
  ```

  Caso queira executar só um arquivo de test use o seguinte comando, considerado que quer testar o arquivo `tests/req07-createPost.test.js`:

  ```sh
  npm test tests/req07-createPost.test.js
  ```
  ou
  ```
  npm test req07
  ```

  Caso queira omitir dados de debug nos testes, utilize a variável de ambiente `DEBUG=false`, como em `DEBUG=false npm test`.

</details>
