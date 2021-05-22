# Diagrama EER de Chat Online

- Criado a tabela user (guarda os usuários)
- Criado a tabela chat
-- Nessa tabela eu criei dois campos not null (p1, p2) obrigando o chat ter pelo menos 2 pessoas
-- Mais ou campo p3 caso preenchido, a conversa é em grupo e não mais em privado

- Tabela chave faz chave estrangeira com a tabela user e tabela chat_group
