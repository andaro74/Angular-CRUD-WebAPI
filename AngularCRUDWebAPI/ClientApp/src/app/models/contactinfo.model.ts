import { IAddress } from "./address.model";

export interface IContactinfo {
  firstname: string;
  lastname: string;
  businessName: string;
  website: string;
  phone: string;
  email: string;
  address: IAddress;
}
