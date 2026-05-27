import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Programa } from '../../programa/entities/programa.entity';

@Entity('niveles_academicos')
export class NivelAcademico {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 500,
  })
  descripcion?: string;

  @OneToMany(() => Programa, (programa) => programa.nivelAcademico)
  programas: Programa[];

  @CreateDateColumn({
    name: 'fecha_creacion',
  })
  fechaCreacion: Date;

  @UpdateDateColumn({
    name: 'fecha_modificacion',
  })
  fechaModificacion: Date;

  @DeleteDateColumn({
    name: 'fecha_eliminacion',
  })
  fechaEliminacion: Date;
}

