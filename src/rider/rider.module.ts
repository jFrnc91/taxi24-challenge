import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';
import { Rider } from './rider.entity';

@Module({
  controllers: [RiderController],
  exports: [RiderService],
  imports: [MikroOrmModule.forFeature({ entities: [Rider] })],
  providers: [RiderService],
})
export class RiderModule {}
