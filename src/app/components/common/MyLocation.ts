export class MyLocation {
    carId: string;
    location: number;
    direction: string;

    constructor(carId: string,location: number,direction: string) {
        this.carId = carId;
        this.direction = direction;
        this.location = location;
    }
}