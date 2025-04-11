import type { IClanCapitalRaidSeasonClanInfo } from "./IClanCapitalRaidSeasonClanInfo";
import type { IClanCapitalRaidSeasonDistrict } from "./IClanCapitalRaidSeasonDistrict";

export interface IClanCapitalRaidSeasonDefenseLog {
    attacker: IClanCapitalRaidSeasonClanInfo;
    attackCount: number;
    districtCount: number;
    districtsDestroyed: number;
    districts: IClanCapitalRaidSeasonDistrict[];
}