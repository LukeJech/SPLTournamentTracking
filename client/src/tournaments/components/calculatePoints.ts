import Player from './player';

const calculateTotalPoints = (player:Player): number => {
    let total = 0
    for (const key in player.points) {
        total += player.points[key as keyof typeof player.points]
    }
    return total
}

export default calculateTotalPoints;