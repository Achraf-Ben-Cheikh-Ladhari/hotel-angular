export interface IHotel{
    hotelId:number;
    hotelName:string;
    description:string;
    price:number;
    imageUrl:string;
    rating: number;
}
export class hotel implements IHotel {
    static find: any;
    constructor(
        public hotelId: number,
        public hotelName: string,
        public price: number,
        public imageUrl: string,
        public description:string,
        public rating : number
    ) { }
    getNewPrice(price: number): number {
        return price - 5;
    }

}