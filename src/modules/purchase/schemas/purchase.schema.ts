import { EntitySchema } from 'typeorm';
import { Purchase } from '../models/purchase.model';
export const CompaniySchema = new EntitySchema<Purchase>({
    name: 'Company',
    tableName: 'companies',
    target: Purchase,
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
            type: Number
        }
    },
    relations: {
    },
});