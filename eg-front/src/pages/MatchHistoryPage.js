import React, {useState} from 'react';
import Header from "../components/Header";
import MatchProfileSimple from "../components/MatchProfileSimple";
import MatchProfile from "../components/MatchProfile";

function MatchHistoryPage({match, history}) {
    const {gameNickname} = match.params;
    const [dropdown, setDropdown] = useState(false);
    const [season, setSeason] = useState('일반');
    // 0은 일반을 뜻함
    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };
    const seasonHandler = (e) => {
      setSeason(e.target.innerText);
    };
    return(
        <>
            <Header history={history}/>
            <MatchProfileSimple
                gameNickname={gameNickname}
                dropdown={dropdown}
                dropdownHandler={dropdownHandler}
                season={season}
                seasonHandler={seasonHandler}
            />
            <MatchProfile />
            </>
    )
}

export default MatchHistoryPage;