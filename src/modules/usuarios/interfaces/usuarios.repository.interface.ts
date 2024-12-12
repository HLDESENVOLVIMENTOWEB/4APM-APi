import { Usuario } from '../../../entities/usuarios.entity';

export interface UsuariosRepositoryInterface {
  findByLogin(login: string): Promise<Usuario | null>;
  findAll(): Promise<Usuario[]>;
  createUsuario(entity: Partial<Usuario>): Promise<Usuario>;
  updateUsuario(id: number, entity: Partial<Usuario>): Promise<Usuario>;
  findOneById(id: number): Promise<Usuario | null>;
  deleteUsuario(id: number): Promise<void>;
}
