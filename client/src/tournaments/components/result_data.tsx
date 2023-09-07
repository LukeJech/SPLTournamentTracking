import React, {useEffect, useState} from 'react';
import PlayerComponent from './player_results';
import Player from './player';
import calculateTotalPoints from './calculatePoints';
import FormatButtons from './modern_wild_buttons';
import './result_data.css';

const GetPLayers: React.FC = () => {

      
    const [playerData, setPLayerData] = useState<Player[]>([]);
    const [sortTable, setSortTable] = useState<string>('noviceModern')
    const [gameFormat, setGameFormat] = useState<string>('Modern')

    useEffect(() => { 
        const fetchPLayerData = async () => { 
            try {
                const response = await fetch('http://localhost:3000/api/players')
                if (!response.ok) {
                    throw new Error('API network response was not ok');
                }

                const data = await response.json();

                const playersWithTotal = data.map((player: Player) => {
                    const { Modern_total, Wild_total } = calculateTotalPoints(player);
                
                    return {
                        ...player,
                        points: {
                            ...player.points,
                            Modern_total: Modern_total,
                            Wild_total: Wild_total,
                        }
                    };
                });
                
                

                const sortedData = playersWithTotal.sort((playerOne:Player, playerTwo:Player) => playerTwo.points.Modern_total - playerOne.points.Modern_total);
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

    const handleFormatChange = (format: string) => {
        setGameFormat(format)
    }

    useEffect(() => {
        console.log(gameFormat)
    }, [gameFormat])

    // sorting table effect
    useEffect(() => {
        console.log(sortTable)
        const sortedData = [...playerData].sort((playerOne:Player, playerTwo:Player) => 
        playerTwo.points[sortTable as keyof typeof playerTwo.points] - playerOne.points[sortTable as keyof typeof playerOne.points]);
        setPLayerData(sortedData)
    }, [sortTable])

    return (
        <div className="Results">
             <FormatButtons handleFormatChange={handleFormatChange}/>
             <div className='table_container'>
                
                <table className='w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-semibold'>
                    <thead>
                        <tr className='text-white'>
                            <th>Rank</th>
                            <th>Player Name</th>
                            {gameFormat === 'Modern' && (
                                <>
                            <th onClick={() => handleSort(`noviceModern`)}>Novice</th>
                                </>
                                )}
                            <th onClick={() => handleSort(`bronze${gameFormat}`)}>Bronze</th>
                            <th onClick={() => handleSort(`silver${gameFormat}`)}>Silver</th>
                            <th onClick={() => handleSort(`gold${gameFormat}`)}>Gold</th>
                            <th onClick={() => handleSort(`diamond${gameFormat}`)}>Diamond</th>
                            <th onClick={() => handleSort(`${gameFormat}_total`)}>Total</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {playerData.length > 0 ? (
                            playerData.map((player, index) => (
                            <PlayerComponent key={player._id} player={player} gameFormat={gameFormat} index={index} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={1}>Loading player data...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
             </div>
    </div>
    )
}

export default GetPLayers;

