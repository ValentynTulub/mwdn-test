import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import {HttpModule} from "@nestjs/axios";
import * as process from "process";

@Module({
  imports: [HttpModule.register({
    baseURL: process.env.IMAGES_SOURCE || 'https://my-json-server.typicode.com/icedrone/json-demo-server'
  }),],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
