import type { ICapitalLeague } from "./ICapitalLeague";
import type { IWarLeague } from "./IWarLeague";
import type { ILanguage } from "./ILanguage";
import type { ILabel } from "./ILabel";
import type { ILocation } from "./ILocation";
import type { IClanCapital } from "./IClanCapital";
import type { IClanMember } from "./IClanMember";

export interface IClan {
    warLeague: IWarLeague;
    capitalLeague: ICapitalLeague;
    memberList: IClanMember[];
    tag: string;
    warFrequency: string;
    warLosses: number;
    clanPoints: number;
    clanBuilderBasePoints: number;
    clanCapitalPoints: number;
    requiredTrophies: number;
    requiredBuilderBaseTrophies: number;
    requiredTownhallLevel: number;
    isFamilyFriendly: boolean;
    isWarLogPublic: boolean;
    clanLevel: number;
    warWinStreak: number;
    warWins: number;
    warTies: number;
    chatLanguage: ILanguage;
    labels: ILabel[];
    name: string;
    location: ILocation;
    type: string;
    members: number;
    description: string;
    clanCapital: IClanCapital;
    badgeUrls: {
        small: string;
        large: string;
        medium: string;
    };
}