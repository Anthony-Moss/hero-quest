const initialState = {
    dungeonBossHP: 50,
    dungeonBossAtk: 35,
    playerAttack: 10,
    monsterLevel: 1,
    dungeonBossLevel: 1,
    bossDisplay: 'none',
    // backgroundPosition: 'left top',
    top: 512,
    left: 480,
    gold: 10,
}

const dungeonBossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_BOSS':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                dungeonBossHP: state.dungeonBossHP - action.payload.playerAtk
            };
        case 'BATTLE_END_DUNGEON_BOSS':
            return {
                ...state,
                dungeonBossHP: 350,
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
        // The player's attack will increase as the player levels up.
        case 'LEVEL_UP':
        return {
            ...state,
            playerAttack: state.playerAttack + action.payload.playerAtk
        }
        // the player's attack will increase as player buys swords
        case "BUY_SWORD":
            if (state.gold >= 5) {
                return {
                    ...state,
                    playerAttack: state.playerAttack + action.payload.playerAttack,
                    gold: state.gold - action.payload.gold
                }
            } else {
                return {
                    ...state,
                }
            }
        case 'DISPLAY_DUNGEON_BOSS':
            return {
                ...state,
                ...action.payload
            }
        case 'DUNGEON_BOSS_BATTLE':
                return {
                    ...state,
                    ...action.payload
                }
        case 'INCREASE_MONSTER_LEVEL':
                return {
                    ...state,
                    dungeonBossHP: state.dungeonBossHP + action.payload.dungeonBossHP,
                    dungeonBossAttack: state.dungeonBossAtk + action.payload.dungeonBossAttack,
                    dungeonBossLevel: state.dungeonBossLevel + action.payload.dungeonBossLevel
                }
        default:
            return state;
    }
}

export default dungeonBossReducer;