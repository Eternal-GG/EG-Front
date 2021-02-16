import React from 'react';
import Header from "../components/Header";

function MatchHistoryPage({match, history}) {
    const {gameNickname} = match.params;
    return(
        <>
            <Header history={history}/>
            <span>전적검색 페이지</span>
            <span>{match.params.gameNickname}</span>
            </>
    )
}

export default MatchHistoryPage;