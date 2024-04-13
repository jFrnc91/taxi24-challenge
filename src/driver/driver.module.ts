import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DriverController } from './driver.controller';
import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';

@Module({
  controllers: [DriverController],
  exports: [DriverService],
  imports: [MikroOrmModule.forFeature({ entities: [Driver] })],
  providers: [DriverService],
})
export class DriverModule {}
