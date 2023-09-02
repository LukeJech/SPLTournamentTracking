import React, {useEffect, useState} from 'react';
import PlayerComponent from './player_results';
import Player from './player';
import calculateTotalPoints from './calculatePoints';


const GetPLayers: React.FC = () => {
    const [playerData, setPLayerData] = useState<Player[]>([]);
    const [sortTable, setSortTable] = useState<string>('noviceModern')

    useEffect(() => { 
        const fetchPLayerData = async () => { 
            try {
                const response = await fetch('http://localhost:3000/api/players')
                if (!response.ok) {
                    throw new Error('API network response was not ok');
                }

                const data = await response.json();
                

                const playersWithTotal = data.map((player: Player) => ({
                    ...player,
                    points: {
                        ...player.points,
                        total: calculateTotalPoints(player),
                    }
                  }));

                const sortedData = playersWithTotal.sort((playerOne:Player, playerTwo:Player) => playerTwo.points.bronzeModern - playerOne.points.bronzeModern);
                setPLayerData(sortedData);
                console.log(sortedData)
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchPLayerData();
        
    }, []);

    const handleSort = (column: string) => {
        setSortTable(column)
    }

    useEffect(() => {
        const sortedData = [...playerData].sort((playerOne:Player, playerTwo:Player) => 
        playerTwo.points[sortTable as keyof typeof playerTwo.points] - playerOne.points[sortTable as keyof typeof playerOne.points]);
        setPLayerData(sortedData)
    }, [sortTable])

    return (
        <div className="Results">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th onClick={() => handleSort('noviceModern')}>Novice</th>
                        <th onClick={() => handleSort('bronzeModern')}>Bronze</th>
                        <th onClick={() => handleSort('silverModern')}>Silver</th>
                        <th onClick={() => handleSort('goldModern')}>Gold</th>
                        <th onClick={() => handleSort('diamondModern')}>Diamond</th>
                        <th onClick={() => handleSort('total')}>Total</th>
                  
                    </tr>
                </thead>
                <tbody>
                    {playerData.length > 0 ? (
                        playerData.map((player, index) => (
                        <PlayerComponent key={player._id} player={player} index={index} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={1}>Loading player data...</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
    )
}

export default GetPLayers;

