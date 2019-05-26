import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class Battle extends React.Component {
    constructor(props){
        super(props);
    }
    

    componentDidMount() {
    }

    static getDerivedStateFromProps(props, state) {
        if (props.monsterHP <= 0) 
            props.killedMonster();
        if (props.exp >= 100) {
            props.levelUp()
        };
        if (props.inBattle) {
            // props.inBattle()
        }
    }


    render() {
        const inBattle = store.getState().player.inBattle
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    MonsterHP: {this.props.monsterHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattle}} >
                    <button onClick={this.battleFunctions}>ATTACK</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    battleFunctions = () => {
        this.props.monsterAttack();
        this.props.playerAttack();
    }
    // _monsterAttack = () => {
    //     this.props.monsterAttack();
    // }
}

export default Battle;