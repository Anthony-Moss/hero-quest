
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTiles: () => {
//             dispatch({ type: 'ADD_TILES', payload: {
//                 tiles: townTiles //updates maps state.tiles with townTiles
//             }})
//             }
//         }
//     } 
    
// const makeWorldSmart = connect(null, mapDispatchToProps);
// const smartWorld = makeWorldSmart(World);
// export default smartWorld;







// import React from 'react';
// import { connect } from 'react-redux';
// import walkSprite from '../styles/HeroSprites/Characters/player_walk.png';
// import PlayerMovement from '../components/player/PlayerMovement';


// function Player(props) {
//     return (
//         <div
//         style={{
//             position: 'absolute',
//             top: props.position[1],
//             left: props.position[0],
//             backgroundImage: `url('${walkSprite}')`,
//             backgroundPosition: props.spriteLocation,
//             width: '32px',
//             height: '32px'
//         }}
//         />
//     )
// }

// function mapStateToProps(state) {
//     return {
//         ...state.player
//     }
// }

// export default connect(mapStateToProps)(PlayerMovement(Player));