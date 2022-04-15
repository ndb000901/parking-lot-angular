export class ParkingSpace {
  parkingLotName: string;
  parkingLotId: number;
  areaId: number;
  parkingSpaceId: number;
  valid: number;

  constructor(
    parkingLotName: string,
    parkingLotId: number,
    areaId: number,
    parkingSpaceId: number,
    valid: number
  ) {
      this.parkingLotName = parkingLotName;
      this.parkingLotId = parkingLotId;
      this.areaId = areaId;
      this.parkingSpaceId = parkingSpaceId;
      this.valid = valid;
  }
}
