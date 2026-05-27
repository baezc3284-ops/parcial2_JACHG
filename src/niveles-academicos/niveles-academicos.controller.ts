import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NivelesAcademicosService } from './niveles-academicos.service';
import { CreateNivelesAcademicoDto } from './dto/create-niveles-academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles-academico.dto';

@Controller('niveles-academicos')
export class NivelesAcademicosController {
  constructor(private readonly nivelesAcademicosService: NivelesAcademicosService) {}

  @Post()
  create(@Body() createNivelesAcademicoDto: CreateNivelesAcademicoDto) {
    return this.nivelesAcademicosService.create(createNivelesAcademicoDto);
  }

  @Get()
  findAll() {
    return this.nivelesAcademicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelesAcademicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNivelesAcademicoDto: UpdateNivelesAcademicoDto) {
    return this.nivelesAcademicosService.update(+id, updateNivelesAcademicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nivelesAcademicosService.remove(+id);
  }
}
