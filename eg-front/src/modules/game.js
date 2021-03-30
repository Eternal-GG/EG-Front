import {request} from "../utils/axios";
import {GAME_STAT_API} from "../Config";
import {reducerUtils} from '../lib/asyncUtils';

const GET_STATS = 'game/GET_STATS';
const GET_STATS_SUCCESS = 'game/GET_STATS_SUCCESS';
const GET_STATS_ERROR = 'game/GET_STATS_ERROR';

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

const initialState = {
    statData: reducerUtils.initial()
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATS:
            return {
                ...state,
                statData: reducerUtils.loading()
            };
        case GET_STATS_SUCCESS:
            return {
                ...state,
                statData: reducerUtils.success(action.payload)
            };
        case GET_STATS_ERROR:
            return {
                ...state,
                statData: reducerUtils.error(action.error)
            };
        default:
            return state;
    }
}