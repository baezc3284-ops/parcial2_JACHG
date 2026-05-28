import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { NivelAcademico } from '../../nivel-academico/entities/nivel-academico.entity';
import { EstadoPrograma } from '../enums/estado-programa.enum';

@Entity('programas')
export class Programa {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({name: 'id_nivel_academico',type: 'int',})
  idNivelAcademico: number;

  @ManyToOne(
    () => NivelAcademico,
    (nivelAcademico) => nivelAcademico.programas,
  )
  @JoinColumn({name: 'id_nivel_academico',})
  nivelAcademico: NivelAcademico;

  @Column({type: 'varchar',length: 100,})
  nombre: string;

  @Column({type: 'varchar',length: 2000,})
  descripcion: string;

  @Column({type: 'int',})
  version: number;

  @Column({name: 'duracion_meses',type: 'int',})
  duracionMeses: number;

  @Column({type: 'decimal',precision: 10,scale: 2,})
  costo: number;

  @Column({name: 'fecha_inicio', type: 'date',})
  fechaInicio: Date;

  @Column({type: 'enum', enum: EstadoPrograma,})
  estado: EstadoPrograma;

  @CreateDateColumn({name: 'fecha_creacion',})
  fechaCreacion: Date;

  @UpdateDateColumn({name: 'fecha_modificacion',})
  fechaModificacion: Date;

  @DeleteDateColumn({name: 'fecha_eliminacion',})
  fechaEliminacion: Date;
}
