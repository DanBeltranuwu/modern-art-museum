import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { MuseumEntity } from './museum.entity';
import { MuseumService } from './museum.service';

describe('MuseumService', () => {
 let service: MuseumService;
 let repository: Repository<MuseumEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [MuseumService],
   }).compile();

   service = module.get<MuseumService>(MuseumService);
   repository = module.get<Repository<MuseumEntity>>(getRepositoryToken(MuseumEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

});