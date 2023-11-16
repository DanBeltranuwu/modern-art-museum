import { Module } from '@nestjs/common';
import { ArtworkController } from './artwork.controller';
import { ArtworkService } from './artwork.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkEntity } from './artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtworkEntity])],
  controllers: [ArtworkController],
  providers: [ArtworkService],
})
export class ArtworkModule {}
