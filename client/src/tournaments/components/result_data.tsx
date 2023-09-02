import React, {useEffect, useState} from 'react';
import PlayerComponent from './player_results';
import Player from './player';


const GetPLayers: React.FC = () => {
    const [playerData, setPLayerData] = useState<Player[]>([]);
    const [sortTable, setSortTable] = useState<{column: String; isAscending: boolean}>({
        column: 'noviceModern',
        isAscending: false,
    })

    useEffect(() => { 
        const fetchPLayerData = async () => { 
            try {
                const response = await fetch('http://localhost:3000/api/players')
                if (!response.ok) {
                    throw new Error('API network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                const sortedData = data.sort((playerOne:Player, playerTwo:Player) => playerTwo.points.bronzeModern - playerOne.points.bronzeModern);
                setPLayerData(sortedData);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchPLayerData();
        
    }, []);


    const handleSort = (column: string) => {
        if (sortTable.column === column) {
            setSortTable({
                column,
                isAscending: !sortTable.isAscending,
            });
        } else {
            setSortTable({column, isAscending: true})
        }
    }

    useEffect(() => {
        // Sorting logic based on the current sorting state
        const sortedData = playerData.sort((playerOne: Player, playerTwo: Player) => {
        const { column, isAscending } = sortTable;
        const pointsOne = playerOne.points[column as keyof typeof playerOne.points];
        const pointsTwo = playerTwo.points[column as keyof typeof playerTwo.points];
    
          if (isAscending) {
            return pointsOne - pointsTwo;
          } else {
            return pointsTwo - pointsOne;
          }
        });
    
        // Update the playerData state with the sorted data
        setPLayerData([...sortedData]);
      }, [sortTable]);

    return (
        <div className="Results">
            <p>testing</p>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th onClick={() => handleSort('noviceModern')}>Novice Baybee</th>
                        <th onClick={() => handleSort('bronzeModern')}>Bronze</th>
                        <th onClick={() => handleSort('silverModern')}>Silver</th>
                        <th onClick={() => handleSort('goldModern')}>Gold</th>
                        <th onClick={() => handleSort('diamondModern')}>Diamond</th>
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