import { DateTime } from "luxon";

export class Purchase {
    id?: number;
    date: DateTime;
    totalValue: number;
}