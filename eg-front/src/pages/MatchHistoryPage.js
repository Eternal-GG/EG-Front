import React from 'react';
import Header from "../components/Header";
import MatchProfileSimple from "../components/MatchProfileSimple";
import MatchProfile from "../components/MatchProfile";

function MatchHistoryPage({match, history}) {
    const {gameNickname} = match.params;
    return(
        <>
            <Header history={history}/>
            <MatchProfileSimple gameNickname={gameNickname}/>
            <MatchProfile />
            </>
    )
}

export default MatchHistoryPage;