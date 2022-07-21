import { openSkyStateView } from "./types/openSkyStateTypes";

export class openskyUtils {

  static sortOpenskyStatesDesc(a: openSkyStateView, b: openSkyStateView): number {
    return b.last_contact - a.last_contact;
  }

static getOpenskyCategoryName(category: number): string {
  var result: string;
  switch (category) {
    case 0: {
      result = 'No information at all';
      break;
    }
    case 1: {
      result = 'No ADS-B Emitter Category Information';
      break;
    }
    case 2: {
      result = 'Light (< 15500 lbs)';
      break;
    }
    case 3: {
      result = 'Small (15500 to 75000 lbs)';
      break;
    }
    case 4: {
      result = 'Large (75000 to 300000 lbs)';
      break;
    }
    case 5: {
      result = 'High Vortex Large (aircraft such as B-757)';
      break;
    }
    case 6: {
      result = 'Heavy (> 300000 lbs)';
      break;
    }
    case 7: {
      result = 'High Performance (> 5g acceleration and 400 kts)';
      break;
    }
    case 8: {
      result = 'Rotorcraft';
      break;
    }
    case 9: {
      result = 'Glider / sailplane';
      break;
    }
    case 10: {
      result = 'Lighter-than-air';
      break;
    }
    case 11: {
      result = 'Parachutist / Skydiver';
      break;
    }
    case 12: {
      result = 'Ultralight / hang-glider / paraglider';
      break;
    }
    case 13: {
      result = 'Reserved';
      break;
    }
    case 14: {
      result = 'Unmanned Aerial Vehicle';
      break;
    }
    case 15: {
      result = 'Space / Trans-atmospheric vehicle';
      break;
    }
    case 16: {
      result = 'Surface Vehicle – Emergency Vehicle';
      break;
    }
    case 17: {
      result = 'Surface Vehicle – Service Vehicle';
      break;
    }
    case 18: {
      result = 'Point Obstacle (includes tethered balloons)';
      break;
    }
    case 19: {
      result = 'Cluster Obstacle';
      break;
    }
    case 20: {
      result = 'Line Obstacle';
      break;
    }
    default:
      {
        result = "?";
      }
  }
  return result;
}

}
