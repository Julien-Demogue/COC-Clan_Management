import type { IClanDistrictData } from "./IClanDistrictData";

export interface IClanCapital { 
    capitalHallLevel: number;
    districts: IClanDistrictData[];
}