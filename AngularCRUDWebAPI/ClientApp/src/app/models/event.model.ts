import { IVenue } from "./venue.model";
import { IEntertainer } from "./entertainer.model";
import { ICustomer } from "./customer.model";

export class Event {
  id: number;
  name: string;
  description: string;
  date: Date;
  venue: IVenue;
  entertainer: IEntertainer;
  customer: ICustomer;
  guests: number;
  deposit: number;
  price: number;
}
