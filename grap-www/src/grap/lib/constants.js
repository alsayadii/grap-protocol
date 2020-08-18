import BigNumber from 'bignumber.js/bignumber';

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
};

export const addressMap = {
  uniswapFactory : "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  YFI : "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  YFII : "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  YCRV: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  YAM: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  WETH : "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  UNIRouter : "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  LINK: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  MKR: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  SNX: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  YCRV: "0x5d6D4355776fffD46D83DCeDB8156D65c152a4ba",
  COMP: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
  LEND: "0xFF55A8FbDb0fDdbeA8E5196e693562f19FCEbFbD",
}
