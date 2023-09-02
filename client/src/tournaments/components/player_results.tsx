import React from 'react';
import Player from './player';


interface PlayerProps {
    player: Player;
}

const PlayerComponent: React.FC<PlayerProps & { index: number }> = ({ player, index}) => {
    const rank = index + 1;

    return (
        <tr className="Player">
            <td>{rank}</td> 
            <td>{player.name}</td> 
            <td>{player.points.noviceModern}</td> 
            <td>{player.points.bronzeModern}</td> 
            <td>{player.points.silverModern}</td> 
            <td>{player.points.goldModern}</td> 
            <td>{player.points.diamondModern}</td> 
            <td>{player.points.total}</td> 

        </tr>
    );
};

export default PlayerComponent;