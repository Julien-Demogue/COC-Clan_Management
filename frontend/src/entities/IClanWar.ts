import type { IWarClan } from "./IWarClan";

export interface IClanWar {
    clan: IWarClan;
    teamSize: number;
    attacksPerMember: number;
    battleModifier: string;
    opponent: IWarClan;
    startTime: number;
    state: string;
    endTime: number;
    preparationStartTime: number;
}