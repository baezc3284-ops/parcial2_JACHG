import { Test, TestingModule } from '@nestjs/testing';
import { ProgramasController } from './programas.controller';
import { programaesService } from './programas.service';
import { beforeEach, describe, it } from 'node:test';

describe('ProgramasController', () => {
  let controller: ProgramasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramasController],
      providers: [programaesService],
    }).compile();

    controller = module.get<ProgramasController>(ProgramasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
