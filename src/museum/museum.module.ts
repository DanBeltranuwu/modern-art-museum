import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumEntity } from './museum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumController } from './museum.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
  providers: [MuseumService],
  controllers: [MuseumController]
})
export class MuseumModule {}
