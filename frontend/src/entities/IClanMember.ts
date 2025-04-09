import type { IBuilderBaseLeague } from "./IBuilderBaseLeague";
import type { ILeague } from "./ILeague";
import type { IPlayerHouse } from "./IPlayerHouse";

export interface IClanMember { 
    league: ILeague;
    builderBaseLeague: IBuilderBaseLeague;
    tag: string;
    name: string;
    role: string;
    townHallLevel: number;
    expLevel: number;
    clanRank: number;
    donations: number;
    donationsReceived: number;
    trophies: number;
    builderBaseTrophies: number;
    playerHouse: IPlayerHouse;
}