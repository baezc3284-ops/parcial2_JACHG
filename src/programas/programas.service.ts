import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateprogramasDto } from './dto/create-programa.dto';
import { UpdateprogramasDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { programa } from './entities/programa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class programaesService {
  constructor(@InjectRepository(programa) private readonly programaRepository: Repository<programa>) {}

  async create(createprogramasDto: CreateprogramasDto): Promise<programa> {
    let programa = await this.programaRepository.findOneBy({
      idprogramas: createprogramasDto.id,
      nombre: createprogramasDto.nombre,
    });
    if (programa) throw new ConflictException('El programa ya existe');

    programa = new programa();
    Object.assign(programa, createprogramasDto);
    return this.programaRepository.save(programa);
  }

  async findAll(): Promise<programa[]> {
    return this.programaRepository.find({ relations: { programa: true }, order: { nombre: 'ASC' } });
  }

  async findOne(id: number): Promise<programa> {
    const programa = await this.programaRepository.findOne({
      where: { id },
      relations: { programa: true },
    });
    if (!programa) throw new NotFoundException('El programa no existe');
    return programa;
  }

  async findByArtista(idArtista: number): Promise<programa[]> {
    return this.programaRepository.find({
      where: { idprograma },
      order: { nombre: 'ASC' },
    });
  }

  async update(id: number, updateprogramaeDto: UpdateprogramaDto): Promise<programa> {
    const programa = await this.findOne(id);
    Object.assign(programa, updateprogramaeDto);
    return this.programaRepository.save(programa);
  }

  async remove(id: number) {
    const programa = await this.findOne(id);
    return this.programaRepository.softRemove(programa);
  }
}