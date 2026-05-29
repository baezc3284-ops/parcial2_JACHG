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

  @ManyToOne(() => NivelAcademico,(nivelAcademico) => nivelAcademico.programas,)
  @JoinColumn({name: 'id_nivel_academico',})
  nivelAcademico: NivelAcademico;

   @Column({name: 'area_conocimiento',type: 'int',})
  AreaConocimiento: number;

  @ManyToOne(() => Areaconocimiento,(areaConocimiento) => areaConocimiento.programas,)
  @JoinColumn({name: 'area_conocimiento',})
  areaConocimiento: Areaconocimiento;

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
   
  @Column({type: 'varchar',length: 100,})
  Derecho: string ;

   @Column({type: 'varchar',length: 100,})
  Educacion: string;

    @Column({type: 'varchar',length: 100,})
  Ingenieria: string; 
  
   @Column({type: 'varchar',length: 100,})
  Salud: string;

  @CreateDateColumn({name: 'fecha_creacion',})
  fechaCreacion: Date;

  @UpdateDateColumn({name: 'fecha_modificacion',})
  fechaModificacion: Date;

  @DeleteDateColumn({name: 'fecha_eliminacion',})
  fechaEliminacion: Date;
}
