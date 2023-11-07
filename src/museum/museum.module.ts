import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumEntity } from './museum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
  providers: [MuseumService]
})
export class MuseumModule {}
