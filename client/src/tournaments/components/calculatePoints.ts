import Player from './player';

type PointTotals = {
    Modern_total: number,
    Wild_total: number
}

const calculateTotalPoints = (player:Player): PointTotals => {
    let Modern_total = 0
    let Wild_total = 0
    for (const key in player.points) {
        if (key.includes('Modern')) {
            Modern_total += player.points[key as keyof typeof player.points]
        } else {
            Wild_total += player.points[key as keyof typeof player.points]
        }
    }
    return {Modern_total: Modern_total, Wild_total: Wild_total}
}

export default calculateTotalPoints;