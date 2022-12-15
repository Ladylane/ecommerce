/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { PurchaseModel } from '../models/purchase.model';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(PurchaseModel)
    private readonly repository: Repository<PurchaseModel>,
  ) {}

  async add(data: PurchaseModel): Promise<any> {
    if (!data || !data.date || !data.totalValue) {
      return {
        code: -1,
        message: 'Os campos precisam ser preenchidos',
      };
    }

    try {
      await this.repository.insert(data);
      return {
        code: 1,
        message: 'OK',
        data,
      };
    } catch (error) {
      return {
        code: -1,
        message: 'Ocorreu um erro ao tentar cadastrar o pedido',
      };
    }
  }

  async getByDate(startDate: string, endDate: string) {
    return this.repository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
  }

  async getAll(): Promise<any> {
    const result = await this.repository.find();

    if (result.length === 0) {
      return {
        code: -1,
        message: 'Nao ha registros',
      };
    }
    return {
      code: 1,
      result,
    };
  }

  async up(id: number): Promise<any> {
    const purchase = await this.repository.findOne({ where: { id } });
    if (purchase == null) {
      return {
        code: -1,
        message: 'Nao encontrado',
      };
    }
    purchase.totalValue = 2000;
    const result = await this.repository.update(id, purchase);
    return {
      code: 1,
      message: 'Atualizado',
      result,
    };
  }

  async del(id: number): Promise<any> {
    const result = await this.repository.findOne({ where: { id } });
    if (result == null) {
      return {
        code: -1,
        message: 'Nao encontrado',
      };
    }
    await this.repository.delete(id);
    return {
      code: 1,
      message: 'Deletado',
    };
  }
}
