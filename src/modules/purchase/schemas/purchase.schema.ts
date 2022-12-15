import { EntitySchema } from 'typeorm';
import { PurchaseModel } from '../models/purchase.model';
export const PurchaseSchema = new EntitySchema<PurchaseModel>({
  name: 'PurchaseModel',
  tableName: 'purchases',
  target: PurchaseModel,
  columns: {
    id: {
      name: 'id',
      primary: true,
      generated: true,
      type: Number,
    },
    date: {
      name: 'date',
      type: 'timestamptz',
      nullable: false,
    },
    totalValue: {
      name: 'total_value',
      type: Number,
    },
  },
  relations: {},
});
