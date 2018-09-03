import { IVenue } from "./venue.model";
import { Entertainer } from "./entertainer.model";
import { Customer } from "./customer.model";

export class Event {
  id: number;
  name: string;
  description: string;
  date: Date;
  venue: IVenue;
  entertainer: Entertainer;
  customer: Customer;
  price: number;
}
