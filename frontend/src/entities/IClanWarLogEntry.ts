import type { IWarClan } from "./IWarClan";

export interface IClanWarLogEntry {
    clan: IWarClan;
    teamSize: number;
    attacksPerMember: number;
    baattleModifier: number;
    opponent: IWarClan;
    endTime: string;
    result: string;
}