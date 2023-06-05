# Auto Market

Descrição: projeto REST para a cadeira de Sistemas Distribuídos.

Foram desenvolvidos três serviços que utilizam o padrão REST:

- O servidor (API)
- O cliente web
- O cliente mobile

## Para executar as aplicações

### Pre-requisitos

- Docker e Docker Compose

### Execução

- Iniciar as aplicações

    ```bash
    docker compose up -d
    ```

    A API fica disponível no endereço [0.0.0.0:8000](http://0.0.0.0:8000), e sua documentação em [0.0.0.0:8000/swagger](http://0.0.0.0:8000/swagger). O client web fica disponível em [0.0.0.0:3000](http://0.0.0.0:3000).

- Parar as aplicações

    ```bash
    docker compose down
    ```
