const {getAllTournaments} = require('./tournamentController.js');

const updateTournamentDataDaily = () => {
    getAllTournaments()

    setInterval(() => {
        getAllTournaments()
    }, 12 * 60 * 60 * 1000)

}

module.exports = updateTournamentDataDaily;