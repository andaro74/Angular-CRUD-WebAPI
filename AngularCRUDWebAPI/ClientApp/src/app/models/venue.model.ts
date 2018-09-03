import { IContactinfo } from "./contactinfo.model";

export interface IVenue {
  id: number;
  description: string;
  contactInfo: IContactinfo;
}
