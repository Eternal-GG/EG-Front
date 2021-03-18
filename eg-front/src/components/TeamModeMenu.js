import React, {useState} from 'react';
import style from'../styles/TeamModeMenu.module.scss';
import PropTypes from 'prop-types';

const TeamModeMenu = ({ setTeamMode }) => {

    TeamModeMenu.propTypes = {
        setTeamMode: PropTypes.func.isRequired, // (teamMode: number) => update teamMode
    }

    const {btn_active} = style;
    const btnInitialState = {
        solo: true,
        duo: false,
        squad: false
    }
    const [btnStyle, setBtnStyle] = useState(btnInitialState);
    const {solo, duo, squad} = btnStyle;
    const styleArray = [solo, duo, squad];
    const onClickHandler = e => {
        const btnName = e.currentTarget.name;
        let btnNumber;
        let isActive = {...btnStyle};
        switch (btnName){
            case 'solo':
                btnNumber = 1;
                isActive={...isActive, solo: true, duo: false, squad: false}
                break;
            case 'duo':
                btnNumber = 2;
                isActive={...isActive, solo: false, duo: true, squad: false}
                break;
            case 'squad':
                btnNumber = 3;
                isActive={...isActive, solo: false, duo: false, squad: true}
                break;
            default:
                console.warn('Uncaught Error! : onClickHandler in TeamModeMenu');
                break;
        }
        setTeamMode(btnNumber);
        setBtnStyle({...isActive});
    }
    const MenuItem = ({name, text, onClickHandler, menuItemStyle}) => {
        // 추후 분리 예정
        MenuItem.propTypes = {
            name: PropTypes.oneOf(['solo', 'duo', 'squad']).isRequired,
            text: PropTypes.oneOf(['솔로', '듀오', '스쿼드']).isRequired,
            onClickHandler: PropTypes.func.isRequired,
            menuItemStyle: PropTypes.string.isRequired,
        }
        return(
            <button
                name={name}
                onClick={e => onClickHandler(e)}
                className={menuItemStyle}
            >
                { text }
            </button>
        )
    };
    return(
        <section>
            {btnNameArray.map(({id, name, text})=>
                <MenuItem
                    key={id}
                    name={name}
                    text={text}
                    onClickHandler={onClickHandler}
                    menuItemStyle={`${styleArray[id - 1] && btn_active}`}
                />
                )}
        </section>
    )
};
const btnNameArray = [
    {id: 1, name: 'solo', text: '솔로'},
    {id: 2, name: 'duo', text: '듀오'},
    {id: 3, name: 'squad', text: '스쿼드'}];

export default TeamModeMenu;

// TODO 솔로, 듀오, 스쿼드, solo, duo, squad types 로 빼기
// 최적화하기