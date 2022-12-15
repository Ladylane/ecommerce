import { DateTime } from 'luxon';

export class PurchaseModel {
  id?: number;
  date: DateTime;
  totalValue: number;
}
