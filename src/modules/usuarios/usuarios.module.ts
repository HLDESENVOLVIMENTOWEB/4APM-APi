import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuariosRepository } from './repositories/usuarios.repository';
import { Usuario } from '../../entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    { provide: 'UsuariosRepositoryInterface', useClass: UsuariosRepository },
  ],
  exports: [UsuariosService],
})
export class UsuariosModule {}



