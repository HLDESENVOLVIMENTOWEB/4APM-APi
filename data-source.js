"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("./src/entities/usuarios.entity");
const categorias_entity_1 = require("./src/entities/categorias.entity");
const receitas_entity_1 = require("./src/entities/receitas.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'teste_receitas_rg_sistemas',
    entities: [usuarios_entity_1.Usuario, categorias_entity_1.Categoria, receitas_entity_1.Receita],
    migrations: ['./src/database/migrations/*.ts'],
    synchronize: false,
});
exports.default = AppDataSource;
