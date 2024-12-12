import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuarios.entity';
import { Categoria } from '../entities/categorias.entity';
import { Receita } from '../entities/receitas.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'teste_receitas_rg_sistemas',
  entities: [Usuario, Categoria, Receita],
  migrations: ['./src/database/migrations/*.ts'],
  synchronize: false, // Use false em produção
};
