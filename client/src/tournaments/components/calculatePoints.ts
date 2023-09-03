import Player from './player';

type PointTotals = {
    modern_total: number,
    wild_total: number
}

const calculateTotalPoints = (player:Player): PointTotals => {
    let modern_total = 0
    let wild_total = 0
    for (const key in player.points) {
        if (key.includes('Modern')) {
            modern_total += player.points[key as keyof typeof player.points]
        } else {
            wild_total += player.points[key as keyof typeof player.points]
        }
    }
    return {modern_total: modern_total, wild_total: wild_total}
}

export default calculateTotalPoints;