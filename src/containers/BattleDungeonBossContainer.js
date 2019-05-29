import { connect } from 'react-redux';
import BattleDungeonBoss from '../components/battle/BattleDungeonBoss';
import { battleTiles, townTiles, dungeonTiles2 } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        dungeonBossHP: state.dungeonBoss.dungeonBossHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        dungeonBossAtk: state.dungeonBoss.dungeonBossAtk,
        inBattleDungeonBoss: state.player.inBattleDungeonBoss,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        monsterLevel: state.monster.monsterLevel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        dungeonBossAttack: (dungeonBossAtk) => {
            dispatch({ type: 'DUNGEON_BOSS_ATTACK', payload: {
                dungeonBossAtk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackDungeonBoss: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK_DUNGEON_BOSS', payload: { 
                playerAtk
            }})
        },
        killedDungeonBoss: () => {
            dispatch({ type: 'BATTLE_END_DUNGEON_BOSS', payload: {
                level: 1,
                gold: 100,
            }})
        },
        // levelUp: () => {
        //     dispatch({ type: 'LEVEL_UP', payload: {
        //         lvl: 1,

        //         // Player's attack will increase by 10 after leveling up.
        //         // See monsterReducer.js to see what's going on.
        //         playerAtk: 10,

        //         // Player will gain 10 hp to their max health after leveling up.
        //         // See playerReducer.js to see what's going on.
        //         hp: 10
        //     }})
        // },
        battleOn: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_BOSS', payload: {
                inBattleDungeonBoss: 'flex',
                tiles: battleTiles,
                
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_BOSS', payload: {
                inBattleDungeonBoss: 'none',
                tiles: dungeonTiles2,
                isListening: true
            }})
        },
        battleDoneLocation: (position) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position
                // spriteLocation: state.lastLocation.spriteLocation,
                // direction: state.lastLocation.direction,
                // walkIndex: state.lastLocation.walkIndex
            }})
        },
        levelUpAllMonsters: () => {
            dispatch({ type: 'INCREASE_MONSTER_LEVEL', payload: {
                monsterLevel: 1,
                monsterHP: 50,
                monsterAttack: 25,
                caveBossLevel: 1,
                caveBossHP: 50,
                caveBossAttack: 25,
                monsterLevel: 1,
                dungeonBossHP: 50,
                dungeonBossAttack: 25
            }})
        },
        killedMonster: () => {
            dispatch({ type: 'BATTLE_END', payload: {
                exp: 100,
                gold: 10
            }})
        },
    }
} 

const makeBattleDungeonSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleDungeonBoss = makeBattleDungeonSmart(BattleDungeonBoss);
export default smartBattleDungeonBoss;