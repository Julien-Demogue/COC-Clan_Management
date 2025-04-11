import type { ICapitalRaidSeasonAttack } from "./ICapitalRaidSeasonAttack";

export interface IClanCapitalRaidSeasonDistrict {
    stars: number;
    name: string;
    id: number;
    destructionPercent: number;
    attackCount: number;
    totalLooted: number;
    attacks: ICapitalRaidSeasonAttack[];
    districtHallLevel: number;
}