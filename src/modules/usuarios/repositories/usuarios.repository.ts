import { Injectable } from '@nestjs/common';
import { Repository, DataSource, DeepPartial } from 'typeorm';
import { Usuario } from '../../../entities/usuarios.entity';
import { UsuariosRepositoryInterface } from '../interfaces/usuarios.repository.interface';

@Injectable()
export class UsuariosRepository
  extends Repository<Usuario>
  implements UsuariosRepositoryInterface
{
  constructor(private readonly dataSource: DataSource) {
    super(Usuario, dataSource.createEntityManager());
  }

  async findByLogin(login: string): Promise<Usuario | null> {
    return this.findOne({ where: { login } });
  }

  async findAll(): Promise<Usuario[]> {
    return this.find();
  }

  async createUsuario(usuario: DeepPartial<Usuario>): Promise<Usuario> {
    const usuarioEntity = this.create(usuario); 
    return this.save(usuarioEntity);           
  }

  async updateUsuario(id: number, usuario: DeepPartial<Usuario>): Promise<any> {
    await this.update(id, usuario);           
    return this.findOneById(id);
  }

  async findOneById(id: number): Promise<Usuario | null> {
    return this.findOne({ where: { id } });
  }

  async deleteUsuario(id: number): Promise<void> {
    const usuario = await this.findOneById(id);
    if (usuario) {
      await this.remove(usuario);             
    }
  }
}
