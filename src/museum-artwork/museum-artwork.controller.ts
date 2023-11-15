import { Controller, Param, Post, UseInterceptors } from '@nestjs/common';
import { MuseumArtworkService } from './museum-artwork.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';

@Controller('museums')
@UseInterceptors(BusinessErrorsInterceptor)
export class MuseumArtworkController {
  constructor(private readonly museumArtworkService: MuseumArtworkService) {}

  @Post(':museumId/artworks/:artworkId')
  async addArtworkMuseum(
    @Param('museumId') museumId: string,
    @Param('artworkId') artworkId: string,
  ) {
    return await this.museumArtworkService.addArtworkMuseum(
      museumId,
      artworkId,
    );
  }

  @Get(':museumId/artworks/:artworkId')
  async findArtworkByMuseumIdArtworkId(
    @Param('museumId') museumId: string,
    @Param('artworkId') artworkId: string,
  ) {
    return await this.museumArtworkService.findArtworkByMuseumIdArtworkId(
      museumId,
      artworkId,
    );
  }
}
