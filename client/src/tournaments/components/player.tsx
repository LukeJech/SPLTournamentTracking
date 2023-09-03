interface Player {
    _id: string;
    name: string;
    placements: {
        first: number;
        second: number;
        third: number;
        top10: number;
    };
    points: {
        noviceModern: number;
        bronzeModern: number;
        bronzeWild: number;
        silverModern: number;
        silverWild: number;
        goldModern: number;
        goldWild: number;
        diamondModern: number;
        diamondWild: number;
        modern_total: number;
        wild_total: number;
        // ... other point properties
    };
    // ... other player properties
}

export default Player;
