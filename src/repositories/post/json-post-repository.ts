// Importa o modelo PostModel, que representa a estrutura de um post
import { PostModel } from "@/models/post/post-model";

// Importa a interface PostRepository
// Essa classe irá implementar o contrato definido por essa interface
import { PostRepository } from "./post-repository";

// Importa a função resolve do módulo path do Node.js
// Ela é usada para montar caminhos de arquivos de forma segura e multiplataforma
import { resolve } from "path";

// Importa a função readFile do módulo fs/promises
// Permite leitura de arquivos usando Promises e async/await
import { readFile } from "fs/promises";

// Define a constante ROOT_DIR
// process.cwd() retorna o diretório raiz onde a aplicação foi iniciada
const ROOT_DIR = process.cwd();

// Define o caminho absoluto até o arquivo posts.json
// resolve junta os segmentos do caminho corretamente para o sistema operacional
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR, // Diretório raiz da aplicação
  "src", // Pasta src
  "db", // Pasta db
  "seed", // Pasta seed
  "posts.json", // Arquivo JSON com os dados dos posts
);

// Declara a classe JsonPostRepository
// Essa classe implementa a interface PostRepository
export class JsonPostRepository implements PostRepository {
  // Método privado responsável por ler os dados do arquivo JSON no disco
  // Retorna uma Promise que resolve em um array de PostModel
  private async readFromDisk(): Promise<PostModel[]> {
    // Lê o conteúdo do arquivo JSON como texto (UTF-8)
    const jsonContent = await readFile(JSON_POST_FILE_PATH, "utf-8");

    // Converte o conteúdo JSON (string) em um objeto JavaScript
    const parseJson = JSON.parse(jsonContent);

    // Extrai a propriedade "posts" do objeto JSON
    const { posts } = parseJson;

    // Retorna o array de posts
    return posts;
  }

  // Implementação do método findAll definido na interface PostRepository
  // Retorna todos os posts existentes no arquivo JSON
  async findAll(): Promise<PostModel[]> {
    // Lê os dados diretamente do disco
    const posts = await this.readFromDisk();

    // Retorna a lista completa de posts
    return posts;
  }

  // Implementação do método findByid definido na interface PostRepository
  // Recebe um id e retorna o post correspondente
  async findByid(id: string): Promise<PostModel> {
    // Busca todos os posts
    const posts = await this.findAll();

    // Procura no array o post cujo id seja igual ao id informado
    const post = posts.find((post) => post.id === id);

    // Se nenhum post for encontrado, lança um erro
    if (!post) throw new Error("Post não encontrado.");

    // Retorna o post encontrado
    return post;
  }
}
