// Importa o tipo PostModel a partir do caminho "@/models/post/post-model"
// O "@" normalmente é um alias configurado no projeto para apontar para a pasta src
import { PostModel } from "@/models/post/post-model";

// Declara uma interface TypeScript chamada PostRepository
// Interfaces definem um "contrato" que classes ou objetos devem seguir
export interface PostRepository {
  // Define o método findAll
  // Esse método não recebe parâmetros
  // Deve retornar uma Promise que resolve em um array de PostModel
  // Normalmente usado para buscar todos os posts
  findAll(): Promise<PostModel[]>;

  // Define o método findByid
  // Recebe um parâmetro "id" do tipo string
  // Deve retornar uma Promise que resolve em um único PostModel
  // Normalmente usado para buscar um post específico pelo seu identificador
  findByid(id: string): Promise<PostModel>;
}
