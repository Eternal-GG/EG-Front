import {request} from "../utils/axios";
import {GAME_STAT_API} from "../Config";

const GET_STAT = 'game/GET_STAT';
const LOADING = 'game/LOADING';
const FAIL_GET_STAT = 'game/FAIL_GET_STAT';

export async function getStats({gameNickname, seasonNumber}) {

    try{
        console.log('왜 콩 이 두명?')
        const statData = await request('get', `${GAME_STAT_API}/${gameNickname}/${seasonNumber}`);
        const {data} = statData;
        let mmrInfo = {
            solo: null,
            duo: null,
            squad: null
        }
        if(seasonNumber && data){
            statData.data.forEach((item)=>{
                if (!item.matchingTeamMode){

                }else if(item.matchingTeamMode === 1){
                    mmrInfo.solo = item.mmr;
                }else if(item.matchingTeamMode === 2){
                    mmrInfo.duo = item.mmr;
                }else{
                    mmrInfo.squad = item.mmr
                }
            })
        }else{
            console.log('시즌넘버가 0이거나 data 없음');
        }

        return{
            type: GET_STAT,
            payload: {data, mmrInfo},
        };
    }catch (e) {
        console.warn(e);
        return{
            type: FAIL_GET_STAT,
        }
    }
}


export default function gameReducer(state = {}, action) {
    switch (action.type) {
        case GET_STAT:
            return {
                ...state,
                stats: action.payload.data,
                mmr: action.payload.mmrInfo,
                success: true
            };
        case LOADING:
            return{
                ...state,
                loading: true
            };
        case FAIL_GET_STAT:
                return{
                    ...state,
                    stats: null,
                    mmr: null,
                    success: false,
                }
        default:
            return state;
    }
}