import type { IClanWarAttack } from "./IClanWarAttack";

export interface IClanWarMember {
    tag: string;
    name: string;
    mapPosition: number;
    townHallLevel: number;
    opponentAttacks: number;
    bestOpponentAttack: IClanWarAttack;
    attacks: IClanWarAttack[];
}