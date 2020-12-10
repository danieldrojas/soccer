import {
    addNewPlayer,
    getPlayers,
    getPlayerWithId
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        //POST endpoint
        .post(addNewPlayer)
        //GET endpoint
        .get(getPlayers)
    
    app.route('/player/:PlayerId')
        .get(getPlayerWithId)
}



export default routes;