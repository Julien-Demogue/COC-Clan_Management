import type { IClan } from "@/entities/IClan";
import type { IClanMember } from "@/entities/IClanMember";
import type { IRoleDistribution } from "@/entities/IRoleDistribution";

export function computeWinrate(clanData: IClan): number {
    const totalWars = clanData.warLosses + clanData.warWins + clanData.warTies;
    if (totalWars === 0) {
        return 0;
    }
    return parseFloat(((clanData.warWins / totalWars) * 100).toFixed(1));
}

export function computeActiveMembersRate(members: IClanMember[]): number {
    if (members.length === 0) {
        return 0;
    }

    /*
    Check if members are active based on their participations in clan's life looking at :
    - donations
    - 4 last wars participations
    - last league participation
    - last clan games participation
    - 2 last raid weeks participations    
    */
    let activeMembers = 0;
    members.forEach((member: IClanMember) => {
        if (member.donations > 0) {
            activeMembers++;
        }
    });

    return parseFloat(((activeMembers / members.length) * 100).toFixed(1));
}

export function computeRoleDistribution(members: IClanMember[]) {
    const roles: IRoleDistribution = {
        leaderName: "",
        coleaderAmount: 0,
        elderAmount: 0,
        memberAmount: 0,
    };

    members.forEach((member: IClanMember) => {
        switch (member.role) {
            case 'leader':
                roles.leaderName = member.name;
                break;
            case 'coLeader':
                roles.coleaderAmount++;
                break;
            case 'admin':
                roles.elderAmount++;
                break;
            case 'member':
                roles.memberAmount++;
                break;
        }
    });

    return roles;
}

export function getMVP(members: IClanMember[]): IClanMember | null {
    // TODO
    return null;
}

/*
This function will return the best donor of the clan.
*/
export function getBestDonor(members: IClanMember[]): IClanMember | null {
    if (members.length === 0) {
        return null;
    }

    let bestDonor: IClanMember | null = null;
    members.forEach((member: IClanMember) => {
        if (!bestDonor || member.donations > bestDonor.donations) {
            bestDonor = member;
        }
    });

    return bestDonor;
}

/*
This function will return the stingiest donor of the clan.
It search the member who receive the most donation compared to his own donation.
*/
export function getStingiestDonnor(members: IClanMember[]): IClanMember | null {
    if (members.length === 0) {
        return null;
    }

    let stingiestDonor: IClanMember | null = null;
    let highestRatio = 0;
    members.forEach((member: IClanMember) => {
        const donations = member.donations || 1; // Avoid division by zero
        const ratio = member.donationsReceived / donations;

        if (ratio > highestRatio) {
            highestRatio = ratio;
            stingiestDonor = member;
        }
    });

    return stingiestDonor;
}

export function computeAverageDonations(members: IClanMember[]): number {
    if (members.length === 0) {
        return 0;
    }

    let totalDonations = 0;
    members.forEach((member: IClanMember) => {
        totalDonations += member.donations;
    });
    return parseFloat((totalDonations / members.length).toFixed(1));
}