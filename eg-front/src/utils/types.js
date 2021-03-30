// register form에 사용
const EMAIL = "email";
const TEXT = "text";
const PASSWORD = "password";
const PASSWORD_CONFIRM = "passwordConfirm";
const NICKNAME = "nickname";
const BS_NICKNAME = "BSnickname";

// register page에 사용
const NULL_INPUT = "값을 입력해주세요.";

// 시즌 이름
const NORMAL = '일반';
const SEASON_1 = '시즌1';
const SEASON = {NORMAL, SEASON_1};

// 티어 이름
const IRON_1 = '아이언 1';
const IRON_2 = '아이언 2';
const IRON_3 = '아이언 3';
const IRON_4 = '아이언 4';
const BRONZE_1 = '브론즈 1';
const BRONZE_2 = '브론즈 2';
const BRONZE_3 = '브론즈 3';
const BRONZE_4 = '브론즈 4';
const SILVER_1 = '실버 1';
const SILVER_2 = '실버 2';
const SILVER_3 = '실버 3';
const SILVER_4 = '실버 4';
const GOLD_1 = '골드 1';
const GOLD_2 = '골드 2';
const GOLD_3 = '골드 3';
const GOLD_4 = '골드 4';
const PLATINUM_1 = '플래티넘 1';
const PLATINUM_2 = '플래티넘 2';
const PLATINUM_3 = '플래티넘 3';
const PLATINUM_4 = '플래티넘 4';
const DIAMOND_1 = '다이어몬드 1';
const DIAMOND_2 = '다이어몬드 2';
const DIAMOND_3 = '다이어몬드 3';
const DIAMOND_4 = '다이어몬드 4';
const DEMIGOD_1 = '데미갓 1';
const DEMIGOD_2 = '데미갓 2';
const DEMIGOD_3 = '데미갓 3';
const DEMIGOD_4 = '데미갓 4';
const ETERNITY_1 = '이터니티 1';
const ETERNITY_2 = '이터니티 2';
const ETERNITY_3 = '이터니티 3';
const ETERNITY_4 = '이터니티 4';
const TIER = [
    IRON_4, IRON_3, IRON_2, IRON_1,
    BRONZE_4, BRONZE_3, BRONZE_2, BRONZE_1,
    SILVER_4, SILVER_3, SILVER_2, SILVER_1,
    GOLD_4, GOLD_3, GOLD_2, GOLD_1,
    PLATINUM_4, PLATINUM_3, PLATINUM_2, PLATINUM_1,
    DIAMOND_4, DIAMOND_3, DIAMOND_2, DIAMOND_1,
    DEMIGOD_4, DEMIGOD_3, DEMIGOD_2, DEMIGOD_1,
    ETERNITY_4, ETERNITY_3, ETERNITY_2, ETERNITY_1,
];

const UN_RANK = '언랭';

const AVERAGE_KILLS = '평균 킬';
const AVERAGE_ASSISTANTS = '평균 어시스트';
const AVERAGE_HUNTS = '평균 야생동물 사냥';
const AVERAGE_MENU = [AVERAGE_KILLS, AVERAGE_ASSISTANTS, AVERAGE_HUNTS];

const TOP3 = 'Top 3';
const TOP5 = 'Top 5';
const Top7 = 'Top 7';
const TOP_MENU = [TOP3, TOP5, Top7];

export {
    EMAIL,
    TEXT,
    PASSWORD,
    PASSWORD_CONFIRM,
    NICKNAME,
    BS_NICKNAME,
    NULL_INPUT,
    TIER,
    SEASON,
    UN_RANK,
    AVERAGE_MENU,
    TOP_MENU
};