/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PurchaseModel } from '../models/purchase.model';
import { PurchaseService } from '../services/purchase.service';

@Controller('/purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async add(@Res() res: Response, @Body() data: PurchaseModel): Promise<any> {
    const result = await this.purchaseService.add(data);
    if (result.code == 1) {
      res.status(HttpStatus.CREATED).json(result);
    } else {
      res.status(HttpStatus.NO_CONTENT).json(result);
    }
  }

  @Get('/:startDate/:endDate')
  async getByDate(
    @Res() res,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ) {
    const result = await this.purchaseService.getByDate(startDate, endDate);

    if (!result || result.length === 0) {
      res.status(HttpStatus.NO_CONTENT).json(result);
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  }

  @Get()
  async getAll(@Res() res) {
    const result = await this.purchaseService.getAll();

    if (result.code === -1) {
      res.status(HttpStatus.NOT_FOUND).json(result.message);
    }
    res.status(HttpStatus.OK).json(result.result);
  }

  @Put('/:id')
  async up(@Res() res, @Param('id') id: number): Promise<any> {
    const result = await this.purchaseService.up(id);
    if (result.code == -1) {
      res.status(HttpStatus.NO_CONTENT).json(result.message);
    }
    res.status(HttpStatus.OK).json(result.message);
  }

  @Delete('/:id')
  async del(@Res() res, @Param('id') id: number): Promise<any> {
    const result = await this.purchaseService.del(id);
    if (result.code == -1) {
      res.status(HttpStatus.NOT_FOUND).json(result.message);
    } else {
      res.status(HttpStatus.OK).json(result.message);
    }
  }
}
