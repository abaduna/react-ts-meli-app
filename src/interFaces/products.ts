import { iAdress } from "./adress";

export interface iProducts{
    id: string;
    title: string;
    price: number;
    available_quantity: number;
    condition: string;
    thumbnail: string
    address: iAdress

}