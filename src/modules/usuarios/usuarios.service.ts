import { Inject, Injectable } from '@nestjs/common';
import { Usuario } from '../../entities/usuarios.entity';
import { UsuariosRepositoryInterface } from './interfaces/usuarios.repository.interface';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('UsuariosRepositoryInterface')
    private readonly usuariosRepository: UsuariosRepositoryInterface,
  ) {}


  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosRepository.createUsuario(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.findAll();
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.usuariosRepository.findOneById(id);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosRepository.updateUsuario(id, usuario);
  }

  async delete(id: number): Promise<void> {
    return this.usuariosRepository.deleteUsuario(id);
  }
}
