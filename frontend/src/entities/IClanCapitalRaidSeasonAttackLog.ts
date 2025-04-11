import type { IClanCapitalRaidSeasonClanInfo } from "./IClanCapitalRaidSeasonClanInfo";
import type { IClanCapitalRaidSeasonDistrict } from "./IClanCapitalRaidSeasonDistrict";

export interface IClanCapitalRaidSeasonAttackLog {
    defender: IClanCapitalRaidSeasonClanInfo;
    attackCount: number;
    districtCount: number;
    districtDestroyed: number;
    districts: IClanCapitalRaidSeasonDistrict[];
}