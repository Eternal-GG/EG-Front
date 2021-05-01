import armorData from '../bs_data/ItemArmor.json'
import weaponData from '../bs_data/ItemWeapon.json'
import {WEAPON, ARMOR} from "./types";

/* About Character */
export const getCharacterName = (number) => {
    switch (number) {
        case 1:
            return '재키';
        case 2:
            return '아야';
        case 3:
            return '피오라';
        case 4:
            return '매그너스';
        case 5:
            return '자히르';
        case 6:
            return '나딘';
        case 7:
            return '현우';
        case 8:
            return '하트';
        case 9:
            return '아이솔';
        case 10:
            return '리다이린';
        case 11:
            return '유키';
        case 12:
            return '혜진';
        case 13:
            return '쇼우';
        case 14:
            return '키아라';
        case 15:
            return '시셀라';
        case 16:
            return '실비아';
        case 17:
            return '아드리아나';
        case 18:
            return '쇼이치';
        case 19:
            return '엠마';
        case 20:
            return '레녹스';
        case 21:
            return '로지';
        case 22:
            return '루크';
        case 23:
            return '캐시';
        case 24:
            return '아델라';
        case 25:
            return '버니스';
        case 26:
            return '바바라';
        default:
            break;
    }
}

/* About Item */
const { data: weaponDatas } = weaponData
const { data: armorDatas } = armorData
const indexOfItem = (itemCode, data) => {
    // (itemCode, data) => return index
    return data.findIndex(item => item.code === itemCode)
}

export const getItemColor = (itemCode, type=null) => {
    // (itemCode, type:option) => return grade
    switch (type) {
        case WEAPON:
            return weaponDatas[indexOfItem(itemCode, weaponDatas)].itemGrade
        case ARMOR:
            return armorDatas[indexOfItem(itemCode, armorDatas)].itemGrade
        default:
            console.warn(`No type!`)
            break;
    }
}

export const getItemName = (itemCode, type=null) => {
    // (itemCode, type:option) => return name
    switch (type) {
        case WEAPON:
            return weaponDatas[indexOfItem(itemCode, weaponDatas)].name
        case ARMOR:
            return armorDatas[indexOfItem(itemCode, armorDatas)].name
        default:
            console.warn(`No type!`)
            break;
    }
}