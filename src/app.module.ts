import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NivelAcademicoModule } from './nivel-academico/nivel-academico.module';
import { ProgramaModule } from './programa/programa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'usrparcial2',
      password: 'P4rc14L2-2026',
      database: 'parcial2_cbg',
      autoLoadEntities: true,
      synchronize: true,
    }),

    NivelAcademicoModule,
    ProgramaModule,
  ],
})
export class AppModule {}