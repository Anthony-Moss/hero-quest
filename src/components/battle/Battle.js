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
        if (props.exp >= 100) {
                props.levelUp();
                // props.battleOn();
            }
        if (props.monsterHP <= 0) {
            props.killedMonster();
            props.battleOff();
            props.battleDoneLocation(props.position);
            // Change Map to previous Map with current position
        };

        if (props.monsterHP <= 0 && props.exp >= 100) {
            props.killedMonster();
            props.levelUp();
            props.battleOff();
        }
        if (props.caveBossHP <= 0) {
            props.killedMonster();
    }
}


    render() {
        const inBattle = store.getState().player.inBattle
        console.log(inBattle);
        return (
            <div style={{display: this.props.inBattle, flexDirection: 'column'}}>
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
                    <button onClick={this._battleFunctions}>ATTACK</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
        
    }
    _battleFunctions = () => {
        this.props.monsterAttack(this.props.monsterAtk);
        this.props.playerAttack(this.props.playerAtk);
    }
}

export default Battle;