
export class ParkingLot{
    parkingLotId: number;
    areaId: number;
    parkingSpaceId: number;
    constructor(parkingLotId: number,areaId: number,parkingSpaceId: number) {
        this.parkingLotId = parkingLotId;
        this.areaId = areaId;
        this.parkingSpaceId = parkingSpaceId;
    }

}