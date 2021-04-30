import normal from '../images/rankTier/09_Normal.png';
import unRank from '../images/rankTier/00_Unrank.png';
import iron from '../images/rankTier/01_Iron.png';
import bronze from '../images/rankTier/02_Bronze.png';
import silver from '../images/rankTier/03_Silver.png';
import gold from '../images/rankTier/04_Gold.png';
import platinum from '../images/rankTier/05_Platinum.png';
import diamond from '../images/rankTier/06_Diamond.png';
import demiGod from '../images/rankTier/07_Demigod.png';
import eternity from '../images/rankTier/08_Eternity.png';

import HALF_JACKIE from '../images/character/half/001_Jackie.png';
import HALF_AYA from '../images/character/half/002_Aya.png';
import HALF_FIORA from '../images/character/half/003_Fiora.png';
import HALF_MAGNUS from '../images/character/half/004_Magnus.png';
import HALF_ZAHIR from '../images/character/half/005_Zahir.png';
import HALF_NADINE from '../images/character/half/006_Nadine.png';
import HALF_HYUN_WOO from '../images/character/half/007_Hyunwoo.png';
import HALF_HART from '../images/character/half/008_Hart.png';
import HALF_ISOL from '../images/character/half/009_Isol.png';
import HALF_LI_DAILIN from '../images/character/half/010_LiDailin.png';
import HALF_YUKI from '../images/character/half/011_Yuki.png';
import HALF_HYE_JIN from '../images/character/half/012_Hyejin.png';
import HALF_XIUKAI from '../images/character/half/013_Xiukai.png';
import HALF_CHIARA from '../images/character/half/014_Chiara.png';
import HALF_SISSELA from '../images/character/half/015_Sissela.png';
import HALF_SILVIA from '../images/character/half/016_Silvia.png';
import HALF_ADRIANA from '../images/character/half/017_Adriana.png';
import HALF_SHOICHI from '../images/character/half/018_Shoichi.png';
import HALF_EMMA from '../images/character/half/019_Emma.png';
import HALF_LENOX from '../images/character/half/020_Lenox.png';
import HALF_ROZZI from '../images/character/half/021_Rozzi.png';
import HALF_LUKE from '../images/character/half/022_Luke.png';
import HALF_CATHY from '../images/character/half/023_Cathy.png';
import HALF_ADELA from '../images/character/half/024_Adela.png';
import HALF_BERNICE from '../images/character/half/025_Bernice.png';
import HALF_BARBARA from '../images/character/half/026_Barbara.png';
import HALF_ALEX from '../images/character/half/027_Alex.png';

import MINI_JACKIE from '../images/character/mini/001_Jackie.png';
import MINI_AYA from '../images/character/mini/002_Aya.png';
import MINI_FIORA from '../images/character/mini/003_Fiora.png';
import MINI_MAGNUS from '../images/character/mini/004_Magnus.png';
import MINI_ZAHIR from '../images/character/mini/005_Zahir.png';
import MINI_NADINE from '../images/character/mini/006_Nadine.png';
import MINI_HYUN_WOO from '../images/character/mini/007_Hyunwoo.png';
import MINI_HART from '../images/character/mini/008_Hart.png';
import MINI_ISOL from '../images/character/mini/009_Isol.png';
import MINI_LI_DAILIN from '../images/character/mini/010_LiDailin.png';
import MINI_YUKI from '../images/character/mini/011_Yuki.png';
import MINI_HYE_JIN from '../images/character/mini/012_Hyejin.png';
import MINI_XIUKAI from '../images/character/mini/013_Xiukai.png';
import MINI_CHIARA from '../images/character/mini/014_Chiara.png';
import MINI_SISSELA from '../images/character/mini/015_Sissela.png';
import MINI_SILVIA from '../images/character/mini/016_Silvia.png';
import MINI_ADRIANA from '../images/character/mini/017_Adriana.png';
import MINI_SHOICHI from '../images/character/mini/018_Shoichi.png';
import MINI_EMMA from '../images/character/mini/019_Emma.png';
import MINI_LENOX from '../images/character/mini/020_Lenox.png';
import MINI_ROZZI from '../images/character/mini/021_Rozzi.png';
import MINI_LUKE from '../images/character/mini/022_Luke.png';
import MINI_CATHY from '../images/character/mini/023_Cathy.png';
import MINI_ADELA from '../images/character/mini/024_Adela.png';
import MINI_BERNICE from '../images/character/mini/025_Bernice.png';
import MINI_BARBARA from '../images/character/mini/026_Barbara.png';
import MINI_ALEX from '../images/character/mini/027_Alex.png';

// import ARMOR_201101 from '../images/Item/201101.png'
// import ARMOR_201102 from '../images/Item/201102.png'
// import ARMOR_201104 from '../images/Item/201104.png'
// import ARMOR_201201 from '../images/Item/201201.png'
// import ARMOR_201202 from '../images/Item/201202.png'
// import ARMOR_201203 from '../images/Item/201203.png'
// import ARMOR_201204 from '../images/Item/201204.png'
// import ARMOR_201205 from '../images/Item/201205.png'
// import ARMOR_201301 from '../images/Item/201301.png'
// import ARMOR_201302 from '../images/Item/201302.png'
// import ARMOR_201303 from '../images/Item/201303.png'
// import ARMOR_201401 from '../images/Item/201401.png'
// import ARMOR_201402 from '../images/Item/201402.png'
// import ARMOR_201403 from '../images/Item/201403.png'
// import ARMOR_201404 from '../images/Item/201404.png'
// import ARMOR_201405 from '../images/Item/201405.png'
// import ARMOR_201406 from '../images/Item//201406.png'
// import ARMOR_201407 from '../images/Item/201407.png'
// import ARMOR_201408 from '../images/Item/201408.png'
// import ARMOR_201409 from '../images/Item/201409.png'
// import ARMOR_201410 from '../images/Item/201410.png'
// import ARMOR_201411 from '../images/Item/201411.png'
// import ARMOR_201501 from '../images/Item/201501.png'

const tierImg = [iron, bronze, silver, gold, platinum, diamond, demiGod, eternity];

const characterHalfImg = [
    HALF_JACKIE, HALF_AYA, HALF_FIORA, HALF_MAGNUS, HALF_ZAHIR, HALF_NADINE, HALF_HYUN_WOO, HALF_HART, HALF_ISOL, HALF_LI_DAILIN,
    HALF_YUKI, HALF_HYE_JIN, HALF_XIUKAI, HALF_CHIARA, HALF_SISSELA, HALF_SILVIA, HALF_ADRIANA, HALF_SHOICHI, HALF_EMMA, HALF_LENOX,
    HALF_ROZZI, HALF_LUKE, HALF_CATHY, HALF_ADELA, HALF_BERNICE, HALF_BARBARA, HALF_ALEX
];

const characterMiniImg = [
    MINI_JACKIE, MINI_AYA, MINI_FIORA, MINI_MAGNUS, MINI_ZAHIR, MINI_NADINE, MINI_HYUN_WOO, MINI_HART, MINI_ISOL, MINI_LI_DAILIN,
    MINI_YUKI, MINI_HYE_JIN, MINI_XIUKAI, MINI_CHIARA, MINI_SISSELA, MINI_SILVIA, MINI_ADRIANA, MINI_SHOICHI, MINI_EMMA, MINI_LENOX,
    MINI_ROZZI, MINI_LUKE, MINI_CATHY, MINI_ADELA, MINI_BERNICE, MINI_BARBARA, MINI_ALEX
];

// const ARMOR = {
//     ARMOR_201101, ARMOR_201102, ARMOR_201104, ARMOR_201201, ARMOR_201202,
//     ARMOR_201203, ARMOR_201204, ARMOR_201205, ARMOR_201301, ARMOR_201302,
//     ARMOR_201303, ARMOR_201401, ARMOR_201402, ARMOR_201403, ARMOR_201404,
//     ARMOR_201405, ARMOR_201406, ARMOR_201407, ARMOR_201408, ARMOR_201409,
//     ARMOR_201410, ARMOR_201411, ARMOR_201501
// }

export {tierImg, normal, unRank, characterHalfImg, characterMiniImg};