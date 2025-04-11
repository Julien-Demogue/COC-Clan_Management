import type { IImageUrls } from "./IImageUrls";
import type { IClanWarMember } from "./IClanWarMember";

export interface IWarClan {
    destructionPercentage: number;
    tag: string;
    badgeUrls: IImageUrls;
    clanLevel: number;
    attacks: number;
    stars: number;
    expEarned: number;
    members: IClanWarMember[];
}