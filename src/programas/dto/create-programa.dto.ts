import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProgramaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre no puede tener mas de 50 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La descripcion es obligatoria' })
  @IsString({ message: 'La descripcion debe ser una cadena de texto' })
  @MaxLength(30, { message: 'La descripcion no puede tener mas de 200 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly descripcion: string;

@ApiProperty()
  @IsDefined({ message: 'La version es obligatorio' })
  @IsInt({ message: 'La version debe ser un número entero' })
  readonly version: number;

@ApiProperty()
  @IsDefined({ message: 'La duracionMeses es obligatorio' })
  @IsInt({ message: 'La duracionMeses debe ser un número entero' })
  readonly duracionMeses: number;

@ApiProperty()
  @IsDefined({ message: 'El costo es obligatorio' })
  @IsInt({ message: 'El costo debe ser un número entero' })
  readonly costo: number;

   @ApiProperty()
  @IsDefined({ message: 'La fechaInicio es obligatorio' })
  @IsDateString({}, { message: 'La fechaInicio debe ser una fecha válida' })
  readonly fechaInicio: Date;
   
   @IsNotEmpty({ message: 'El derecho es obligatorio' })
  @IsString({ message: 'El derecho debe ser una cadena de texto' })
  @MaxLength(30, { message: 'El derecho no puede tener mas de 20 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly Derecho: string;
  
  @IsNotEmpty({ message: 'La Educacion es obligatoria' })
  @IsString({ message: 'La Educacion debe ser una cadena de texto' })
  @MaxLength(30, { message: 'La Educacion no puede tener mas de 20 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly Educacion: string;

  @IsNotEmpty({ message: 'La Ingenieria es obligatoria' })
  @IsString({ message: 'La Ingenieria debe ser una cadena de texto' })
  @MaxLength(30, { message: 'La Ingenieria no puede tener mas de 20 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly Ingenieria: string;

  @IsNotEmpty({ message: 'La Salud es obligatoria' })
  @IsString({ message: 'La Salud debe ser una cadena de texto' })
  @MaxLength(30, { message: 'La Salud no puede tener mas de 20 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly Salud: string;

}




