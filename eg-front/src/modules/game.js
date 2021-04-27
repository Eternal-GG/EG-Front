import { request } from '../utils/axios';
import { GAME_STAT_API, GAME_LIST_API } from '../Config';
import {reducerUtilsGames, reducerUtilsStats} from '../lib/asyncUtils';

const GET_STATS = 'game/GET_STATS';
const GET_STATS_SUCCESS = 'game/GET_STATS_SUCCESS';
const GET_STATS_ERROR = 'game/GET_STATS_ERROR';

const GET_GAMES = 'game/GET_GAMES';
const GET_GAMES_SUCCESS = 'game/GET_GAMES_SUCCESS';
const GET_GAMES_ERROR = 'game/GET_GAMES_ERROR';

const classifyStat = data => {
    // stats 내부 데이터를 mmr, mostCharacter 로 분류하는 함수
    const initialInfo = {
        solo: null,
        duo: null,
        squad: null
    }
    let mmrInfo = {...initialInfo};
    let mostCharacterInfo = {...initialInfo};

    data.forEach(item => {
        const {matchingTeamMode, characterStat, mmr} = item;
        switch (matchingTeamMode) {
            case 1:
                mmrInfo = {...mmrInfo, solo: mmr};
                mostCharacterInfo = {...mostCharacterInfo, solo: characterStat};
                break;
            case 2:
                mmrInfo = {...mmrInfo, duo: mmr};
                mostCharacterInfo = {...mostCharacterInfo, duo: characterStat};
                break;
            case 3:
                mmrInfo = {...mmrInfo, squad: mmr};
                mostCharacterInfo = {...mostCharacterInfo, squad: characterStat};
                break;
            default:
                break;
        }
    })

    return {mmrInfo, mostCharacterInfo};
};

export const getGameStats = ({gameNickname, seasonNumber}) => async dispatch => {
    // 요청이 시작됨
    dispatch({ type: GET_STATS });
    // API 를 호출
    try {
        const statData = await request('get', `${GAME_STAT_API}/${gameNickname}/${seasonNumber}`);

        // 성공했을 때
        const {data} = statData;
        const classifiedStat = classifyStat(data);

        dispatch({
            type: GET_STATS_SUCCESS,
            payload: {...classifiedStat, data}
        });
    }catch (e) {
        // 실패했을 때
        dispatch({
            type: GET_STATS_ERROR,
            error: e
        });
        console.error(e)
    }

};
export const getGames = ({ gameNickname, page }) => async dispatch => {
    // 요청이 시작됨
    dispatch({ type: GET_GAMES });

    // API 를 호출
    try {
        const gamesData = await request('get', `${GAME_LIST_API}/${gameNickname}/${page}`);

        // 성공했을 때
        // const {data} = gamesData;
        // console.log(data)

        dispatch({
            type: GET_GAMES_SUCCESS,
            payload: gamesData,
        });
    }catch (e) {
        // 실패했을 때
        dispatch({
            type: GET_GAMES_ERROR,
            error: e
        });
        console.error(e)
    }

};

const initialState = {
    statData: reducerUtilsStats.initial(),
    gamesData: reducerUtilsGames.initial(),
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATS:
            return {
                ...state,
                statData: reducerUtilsStats.loading()
            };
        case GET_STATS_SUCCESS:
            return {
                ...state,
                statData: reducerUtilsStats.success(action.payload)
            };
        case GET_STATS_ERROR:
            return {
                ...state,
                statData: reducerUtilsStats.error(action.error)
            };
        case GET_GAMES:
            return {
                ...state,
                gamesData: reducerUtilsGames.loading()
            };
        case GET_GAMES_SUCCESS:
            return {
                ...state,
                gamesData: reducerUtilsGames.success(action.payload)
            };
        case GET_GAMES_ERROR:
            return {
                ...state,
                gamesData: reducerUtilsGames.error(action.error)
            };
        default:
            return state;
    }
}