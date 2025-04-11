import type { IClanCapitalRaidSeasonAttackLog } from "./IClanCapitalRaidSeasonAttackLog";
import type { IClanCapitalRaidSeasonDefenseLog } from "./IClanCapitalRaidSeasonDefenseLog";
import type { IClanCapitalRaidSeasonMember } from "./IClanCapitalRaidSeasonMember";

export interface IClanCapitalRaidSeason {
    attackLog: IClanCapitalRaidSeasonAttackLog[];
    defenseLog: IClanCapitalRaidSeasonDefenseLog[];
    state: string;
    startTime: number;
    endTime: number;
    capitalTotalLoot: number;
    raidsCompleted: number;
    totalAttacks: number;
    enemyDistrictsDestroyed: number;
    offensiveRewards: number;
    defensiveRewards: number;
    members: IClanCapitalRaidSeasonMember[];
}