import { Module } from '@nestjs/common';
import { MuseumArtworkService } from './museum-artwork.service';
import { MuseumArtworkController } from './museum-artwork.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from 'src/museum/museum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
  providers: [MuseumArtworkService],
  controllers: [MuseumArtworkController],
})
export class MuseumArtworkModule {}
