import React from 'react';
import Player from './player';


interface PlayerProps {
    player: Player;
    index: number;
    gameFormat: string; 
}

const PlayerComponent: React.FC<PlayerProps & { index: number }> = ({ player, gameFormat, index}) => {
    const rank = index + 1;

    return (
        <tr className="Player text-white ">
            <td>{rank}</td> 
            <td>{player.name}</td> 
            {gameFormat === 'Modern' && (
                <>
                <td>{player.points.noviceModern}</td> 
                <td>{player.points.bronzeModern}</td> 
                <td>{player.points.silverModern}</td> 
                <td>{player.points.goldModern}</td> 
                <td>{player.points.diamondModern}</td> 
                <td>{player.points.Modern_total}</td> 
                </>
            )}
            {gameFormat === 'Wild' && (
                <>
                <td>{player.points.bronzeWild}</td> 
                <td>{player.points.silverWild}</td> 
                <td>{player.points.goldWild}</td> 
                <td>{player.points.diamondWild}</td> 
                <td>{player.points.Wild_total}</td> 
                </>
            )}

        </tr>
    );
};

export default PlayerComponent;