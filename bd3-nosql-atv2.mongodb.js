const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv2";

use(database);
// db.createCollection(collection);

db['bd3-nosql-atv2'].insertMany(
    [
        {
          "id": 1,
          "nome": "João Silva",
          "idade": 20,
          "curso": "Engenharia de Software",
          "notas": [8.5, 7.2, 9.0],
          "email": "joao.silva@universidade.com"
        },
        {
          "id": 2,
          "nome": "Maria Oliveira",
          "idade": 22,
          "curso": "Ciência da Computação",
          "notas": [6.8, 8.4, 7.9],
          "email": "maria.oliveira@universidade.com"
        },
        {
          "id": 3,
          "nome": "Pedro Santos",
          "idade": 21,
          "curso": "Administração",
          "notas": [7.5, 8.0, 6.5],
          "email": "pedro.santos@universidade.com"
        },
        {
          "id": 4,
          "nome": "Ana Costa",
          "idade": 19,
          "curso": "Psicologia",
          "notas": [9.1, 8.8, 9.5],
          "email": "ana.costa@universidade.com"
        },
        {
          "id": 5,
          "nome": "Lucas Pereira",
          "idade": 23,
          "curso": "Engenharia Civil",
          "notas": [6.7, 7.3, 8.1],
          "email": "lucas.pereira@universidade.com"
        },
        {
          "id": 6,
          "nome": "Julia Rodrigues",
          "idade": 20,
          "curso": "Medicina",
          "notas": [9.8, 9.7, 9.9],
          "email": "julia.rodrigues@universidade.com"
        },
        {
          "id": 7,
          "nome": "Gabriel Almeida",
          "idade": 21,
          "curso": "Direito",
          "notas": [7.0, 7.5, 8.0],
          "email": "gabriel.almeida@universidade.com"
        },
        {
          "id": 8,
          "nome": "Isabela Fernandes",
          "idade": 19,
          "curso": "Arquitetura",
          "notas": [8.2, 8.6, 7.9],
          "email": "isabela.fernandes@universidade.com"
        },
        {
          "id": 9,
          "nome": "Rafael Souza",
          "idade": 22,
          "curso": "Economia",
          "notas": [6.5, 7.0, 6.8],
          "email": "rafael.souza@universidade.com"
        },
        {
          "id": 10,
          "nome": "Laura Mendes",
          "idade": 20,
          "curso": "Design Gráfico",
          "notas": [8.7, 8.9, 9.0],
          "email": "laura.mendes@universidade.com"
        },
        {
          "id": 11,
          "nome": "Matheus Lima",
          "idade": 21,
          "curso": "Engenharia Mecânica",
          "notas": [7.3, 7.8, 8.2],
          "email": "matheus.lima@universidade.com"
        },
        {
          "id": 12,
          "nome": "Camila Carvalho",
          "idade": 19,
          "curso": "Biologia",
          "notas": [8.9, 9.1, 8.7],
          "email": "camila.carvalho@universidade.com"
        },
        {
          "id": 13,
          "nome": "Thiago Gomes",
          "idade": 22,
          "curso": "Física",
          "notas": [6.8, 7.2, 7.5],
          "email": "thiago.gomes@universidade.com"
        },
        {
          "id": 14,
          "nome": "Beatriz Martins",
          "idade": 20,
          "curso": "Letras",
          "notas": [8.5, 8.8, 9.0],
          "email": "beatriz.martins@universidade.com"
        },
        {
          "id": 15,
          "nome": "Felipe Ribeiro",
          "idade": 21,
          "curso": "Química",
          "notas": [7.0, 7.5, 8.0],
          "email": "felipe.ribeiro@universidade.com"
        },
        {
          "id": 16,
          "nome": "Mariana Sousa",
          "idade": 19,
          "curso": "História",
          "notas": [8.2, 8.6, 8.9],
          "email": "mariana.sousa@universidade.com"
        },
        {
          "id": 17,
          "nome": "Vinicius Castro",
          "idade": 22,
          "curso": "Marketing",
          "notas": [6.5, 7.0, 6.8],
          "email": "vinicius.castro@universidade.com"
        },
        {
          "id": 18,
          "nome": "Carolina Vieira",
          "idade": 20,
          "curso": "Enfermagem",
          "notas": [8.7, 8.9, 9.0],
          "email": "carolina.vieira@universidade.com"
        },
        {
          "id": 19,
          "nome": "Guilherme Rocha",
          "idade": 21,
          "curso": "Engenharia Elétrica",
          "notas": [7.3, 7.8, 8.2],
          "email": "guilherme.rocha@universidade.com"
        },
        {
          "id": 20,
          "nome": "Larissa Barbosa",
          "idade": 19,
          "curso": "Odontologia",
          "notas": [8.9, 9.1, 8.7],
          "email": "larissa.barbosa@universidade.com"
        },
        {
          "id": 21,
          "nome": "Daniel Ferreira",
          "idade": 22,
          "curso": "Matemática",
          "notas": [6.8, 7.2, 7.5],
          "email": "daniel.ferreira@universidade.com"
        },
        {
          "id": 22,
          "nome": "Eduarda Nascimento",
          "idade": 20,
          "curso": "Farmácia",
          "notas": [8.5, 8.8, 9.0],
          "email": "eduarda.nascimento@universidade.com"
        },
        {
          "id": 23,
          "nome": "Lucas Dias",
          "idade": 21,
          "curso": "Geografia",
          "notas": [7.0, 7.5, 8.0],
          "email": "lucas.dias@universidade.com"
        },
        {
          "id": 24,
          "nome": "Sophia Pinto",
          "idade": 19,
          "curso": "Nutrição",
          "notas": [8.2, 8.6, 8.9],
          "email": "sophia.pinto@universidade.com"
        },
        {
          "id": 25,
          "nome": "Bruno Correia",
          "idade": 22,
          "curso": "Engenharia Química",
          "notas": [6.5, 7.0, 6.8],
          "email": "bruno.correia@universidade.com"
        },
        {
          "id": 26,
          "nome": "Helena Gonçalves",
          "idade": 20,
          "curso": "Jornalismo",
          "notas": [8.7, 8.9, 9.0],
          "email": "helena.goncalves@universidade.com"
        },
        {
          "id": 27,
          "nome": "Arthur Santos",
          "idade": 21,
          "curso": "Engenharia Ambiental",
          "notas": [7.3, 7.8, 8.2],
          "email": "arthur.santos@universidade.com"
        },
        {
          "id": 28,
          "nome": "Valentina Silva",
          "idade": 19,
          "curso": "Publicidade e Propaganda",
          "notas": [8.9, 9.1, 8.7],
          "email": "valentina.silva@universidade.com"
        },
        {
          "id": 29,
          "nome": "Gustavo Lima",
          "idade": 22,
          "curso": "Engenharia de Produção",
          "notas": [6.8, 7.2, 7.5],
          "email": "gustavo.lima@universidade.com"
        },
        {
          "id": 30,
          "nome": "Alice Costa",
          "idade": 20,
          "curso": "Relações Internacionais",
          "notas": [8.5, 8.8, 9.0],
          "email": "alice.costa@universidade.com"
        },
        {
          "id": 31,
          "nome": "Samuel Oliveira",
          "idade": 21,
          "curso": "Engenharia de Controle e Automação",
          "notas": [7.0, 7.5, 8.0],
          "email": "samuel.oliveira@universidade.com"
        },
        {
          "id": 32,
          "nome": "Clara Almeida",
          "idade": 19,
          "curso": "Engenharia Biomédica",
          "notas": [8.2, 8.6, 8.9],
          "email": "clara.almeida@universidade.com"
        },
        {
          "id": 33,
          "nome": "Henrique Fernandes",
          "idade": 22,
          "curso": "Engenharia de Telecomunicações",
          "notas": [6.5, 7.0, 6.8],
          "email": "henrique.fernandes@universidade.com"
        },
        {
          "id": 34,
          "nome": "Laura Rodrigues",
          "idade": 20,
          "curso": "Engenharia Naval",
          "notas": [8.7, 8.9, 9.0],
          "email": "laura.rodrigues@universidade.com"
        },
        {
          "id": 35,
          "nome": "Davi Pereira",
          "idade": 21,
          "curso": "Engenharia Aeroespacial",
          "notas": [7.3, 7.8, 8.2],
          "email": "davi.pereira@universidade.com"
        },
        {
          "id": 36,
          "nome": "Manuela Souza",
          "idade": 19,
          "curso": "Engenharia de Petróleo",
          "notas": [8.9, 9.1, 8.7],
          "email": "manuela.souza@universidade.com"
        },
        {
          "id": 37,
          "nome": "Leonardo Mendes",
          "idade": 22,
          "curso": "Engenharia de Minas",
          "notas": [6.8, 7.2, 7.5],
          "email": "leonardo.mendes@universidade.com"
        },
        {
          "id": 38,
          "nome": "Sofia Carvalho",
          "idade": 20,
          "curso": "Engenharia de Materiais",
          "notas": [8.5, 8.8, 9.0],
          "email": "sofia.carvalho@universidade.com"
        },
        {
          "id": 39,
          "nome": "Enzo Castro",
          "idade": 21,
          "curso": "Engenharia de Energia",
          "notas": [7.0, 7.5, 8.0],
          "email": "enzo.castro@universidade.com"
        },
        {
          "id": 40,
          "nome": "Lívia Vieira",
          "idade": 19,
          "curso": "Engenharia de Alimentos",
          "notas": [8.2, 8.6, 8.9],
          "email": "livia.vieira@universidade.com"
        },
        {
          "id": 41,
          "nome": "Miguel Rocha",
          "idade": 22,
          "curso": "Engenharia de Manufatura",
          "notas": [6.5, 7.0, 6.8],
          "email": "miguel.rocha@universidade.com"
        },
        {
          "id": 42,
          "nome": "Bianca Barbosa",
          "idade": 20,
          "curso": "Engenharia de Sistemas",
          "notas": [8.7, 8.9, 9.0],
          "email": "bianca.barbosa@universidade.com"
        },
        {
          "id": 43,
          "nome": "Caio Ferreira",
          "idade": 21,
          "curso": "Engenharia de Segurança do Trabalho",
          "notas": [7.3, 7.8, 8.2],
          "email": "caio.ferreira@universidade.com"
        },
        {
          "id": 44,
          "nome": "Rebeca Nascimento",
          "idade": 19,
          "curso": "Engenharia de Transportes",
          "notas": [8.9, 9.1, 8.7],
          "email": "rebeca.nascimento@universidade.com"
        },
        {
          "id": 45,
          "nome": "Rafael Dias",
          "idade": 22,
          "curso": "Engenharia de Computação",
          "notas": [6.8, 7.2, 7.5],
          "email": "rafael.dias@universidade.com"
        },
        {
          "id": 46,
          "nome": "Isadora Pinto",
          "idade": 20,
          "curso": "Engenharia de Redes",
          "notas": [8.5, 8.8, 9.0],
          "email": "isadora.pinto@universidade.com"
        },
        {
          "id": 47,
          "nome": "Emanuel Santos",
          "idade": 21,
          "curso": "Engenharia de Software",
          "notas": [7.0, 7.5, 8.0],
          "email": "emanuel.santos@universidade.com"
        },
        {
          "id": 48,
          "nome": "Luiza Silva",
          "idade": 19,
          "curso": "Engenharia de Processos",
          "notas": [8.2, 8.6, 8.9],
          "email": "luiza.silva@universidade.com"
        },
        {
          "id": 49,
          "nome": "Vitor Oliveira",
          "idade": 22,
          "curso": "Engenharia de Infraestrutura",
          "notas": [6.5, 7.0, 6.8],
          "email": "vitor.oliveira@universidade.com"
        },
        {
          "id": 50,
          "nome": "Melissa Almeida",
          "idade": 20,
          "curso": "Engenharia de Gestão",
          "notas": [8.7, 8.9, 9.0],
          "email": "melissa.almeida@universidade.com"
        }
      ]
    );

db['bd3-nosql-atv2'].updateOne(
        { id: 1 },
        { $set: { nome: "João Silva Junior", email: "joao.silva.junior@universidade.com", idade: 22 } }
);
db['bd3-nosql-atv2'].deleteOne(
    { id: 2 }
);
db['bd3-nosql-atv2'].find(
    { email: { $regex: "@universidade.com$" } }
  );