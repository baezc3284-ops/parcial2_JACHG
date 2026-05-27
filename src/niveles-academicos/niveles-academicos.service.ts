import { Injectable } from '@nestjs/common';

@Injectable()
export class NivelAcademicoService {
  create(createNivelAcademicoDto: any) {
    return 'Crear nivel académico';
  }

  findAll() {
    return 'Mostrar todos';
  }

  findOne(id: number) {
    return `Mostrar ${id}`;
  }

  update(id: number, updateNivelAcademicoDto: any) {
    return `Actualizar ${id}`;
  }

  remove(id: number) {
    return `Eliminar ${id}`;
  }
}
