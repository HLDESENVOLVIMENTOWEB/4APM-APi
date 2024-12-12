import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuarios.entity';
import { Categoria } from './categorias.entity';

@Entity('receitas')
export class Receita {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuarios' })
  usuario: Usuario = new Usuario();

  @ManyToOne(() => Categoria, { nullable: true })
  @JoinColumn({ name: 'id_categorias' })
  categoria: Categoria = new Categoria();

  @Column({ length: 45, nullable: true })
  nome: string = '';

  @Column({ type: 'int', unsigned: true, nullable: true })
  tempo_preparo_minutos: number = 0;

  @Column({ type: 'int', unsigned: true, nullable: true })
  porcoes: number = 0;

  @Column({ type: 'text' })
  modo_preparo: string = '';

  @Column({ type: 'text', nullable: true })
  ingredientes: string = '';

  @Column({ type: 'datetime' })
  criado_em: Date = new Date();

  @Column({ type: 'datetime' })
  alterado_em: Date = new Date();
}
