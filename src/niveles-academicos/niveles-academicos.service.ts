import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Createniveles-academicoDto } from './dto/create-niveles-academico.dto';
import { Updateniveles-academicoDto } from './dto/update-niveles-academico.dto';
import { niveles-academico } from './entities/niveles-academico.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { describe } from 'node:test';
   
@Injectable()
export class NivelesAcademicosService {
  constructor(@InjectRepository(niveles-academico) private niveles-academicoRepository: Repository<niveles-academico>) {}

  async create(createniveles-academicoDto: Createniveles-academicoDto): Promise<niveles-academico> {
    let niveles-academico = await this.niveles-academicoRepository.findOneBy({
      nombre: createniveles-academicoDto.nombre.trim(),
      descripcion: createniveles-academicoDto.descripcion.trim(),
    });
    if (niveles-academico) throw new ConflictException('El niveles-academico ya existe');

    niveles-academico = new niveles-academico();
    Object.assign(niveles-academico, createniveles-academicoDto);
    return this.niveles-academicoRepository.save(niveles-academico);
  }

  async findAll(): Promise<niveles-academico[]> {
    return this.niveles-academicoRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(id: number): Promise<niveles-academico> {
    const niveles-academico = await this.niveles-academicoRepository.findOneBy({ id });
    if (!niveles-academico) throw new NotFoundException('El niveles-academico no existe');
    return niveles-academico;
  }

  async update(id: number, updateNivelesAcademicosDto: UpdateNivelesAcademicosDto): Promise<niveles-academico> {
    const niveles-academico = await this.findOne(id);
    Object.assign(niveles-academico, updateNivelesAcademicosDto);
    return this.niveles-academicoRepository.save(niveles-academico);
  }

  async remove(id: number): Promise<niveles-academico> {
    const niveles-academico = await this.findOne(id);
    return this.niveles-academicoRepository.softRemove(niveles-academico);
  }
}