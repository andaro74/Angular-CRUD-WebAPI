import { IVenue } from "./venue.model";
import { IEntertainer } from "./entertainer.model";
import { ICustomer } from "./customer.model";

export interface IEvent {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  venueId:number;
  venue: IVenue;
  entertainerId:number;
  entertainer: IEntertainer;
  customer: ICustomer;
  customerId:number;
  paidAmount: number;
  totalAmount: number;
  photoUrl: string;
}


