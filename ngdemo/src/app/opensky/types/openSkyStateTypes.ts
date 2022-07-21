import { openskyUtils } from '../openskyUtils';

//https://openskynetwork.github.io/opensky-api/rest.html

export class openSkyStateWrapper {
  time!: number;
  states!: openSkyState[];
}

export class openSkyState {
  icao24!: string;
  callsign!: string;
  origin_country!: string;
  time_position!: number;
  last_contact!: number;
  longitude!: number;
  latitude!: number;
  baro_altitude!: number;
  on_ground!: boolean;
  velocity!: number;
  true_track!: number;
  vertical_rate!: number;
  sensors!: number[];
  geo_altitude!: number;
  squawk!: string;
  spi!: boolean;
  position_source!: number;
  category!: number;
}

export class openSkyStateView {
  icao24!: string;
  callsign!: string;
  origin_country: string;
  time_position: number;
  last_contact: number;
  longitude: number;
  latitude: number;
  baro_altitude: number;
  on_ground: boolean;
  velocity: number;
  true_track: number;
  vertical_rate: number;
  sensors: number[];
  geo_altitude: number;
  squawk: string;
  spi: boolean;
  position_source: number;
  category: number;

  // added members
  categoryName!: string;

  constructor(item: any[]) {

    this.icao24 = item[0];
    this.callsign = item[1];
    this.origin_country = item[2];
    this.time_position = item[3];
    this.last_contact = item[4];
    this.longitude = item[5];
    this.latitude = item[6];
    this.baro_altitude = item[7];
    this.on_ground = item[8];
    this.velocity = item[9];
    this.true_track = item[10];
    this.vertical_rate = item[11];
    this.sensors = item[12];
    this.geo_altitude = item[13];
    this.squawk = item[14];
    this.spi = item[15];
    this.position_source = item[16];
    this.category = item[17];
    this.categoryName = openskyUtils.getOpenskyCategoryName(item[17]);
  }
}
