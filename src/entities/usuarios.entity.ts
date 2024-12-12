import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ length: 100, nullable: true })
  nome: string = '';

  @Column({ length: 100, unique: true })
  login: string = '';

  @Column({ length: 100 })
  senha: string = '';

  @Column({ type: 'datetime' })
  criado_em: Date = new Date();

  @Column({ type: 'datetime' })
  alterado_em: Date = new Date();
}
