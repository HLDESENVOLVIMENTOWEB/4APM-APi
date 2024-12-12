import { DataSource } from 'typeorm';
import { Usuario } from './src/entities/usuarios.entity';
import { Categoria } from './src/entities/categorias.entity';
import { Receita } from './src/entities/receitas.entity';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'teste_receitas_rg_sistemas',
  entities: [Usuario, Categoria, Receita],
  migrations: ['./src/database/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;