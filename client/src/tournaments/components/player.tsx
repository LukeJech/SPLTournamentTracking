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
        Modern_total: number;
        Wild_total: number;
        // ... other point properties
    };
    // ... other player properties
}

export default Player;
