import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { buyNFTSaga } from './saga';
import { BuyNftState } from './types';
import BigNumber from 'bignumber.js';

export const initialState: BuyNftState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isSuccessBc: false,
  isPublicSell: false,
  salePriceBc: 200,
  discountPercentageBc: '',
  isAlreadyBought: false,
  isValidCoupon: false,
  discountedPrice: 250,
};

const buyNFTSlice = createSlice({
  name: 'buyNFT',
  initialState,
  reducers: {
    checkBuyNFTRequest(state, action: PayloadAction<any>) {},
    checkValidateCoupon(state, action: PayloadAction<any>) {},
    buyNFTRequest(state, action) {
      state.isLoading = true;
    },
    buyNFTError(state) {
      state.isError = true;
    },
    buyNFTSuccess(state) {
      state.isSuccess = true;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
    checkIsAlreadyBought(state, action) {
      state.isAlreadyBought = action.payload;
    },
    getDiscount(state, action: PayloadAction<any>) {
      const getWhitelistPrice = action.payload;
      state.isSuccessBc = getWhitelistPrice['0'];
      state.salePriceBc = Number(
        new BigNumber(getWhitelistPrice['1']).dividedBy(10 ** 6).toFixed(),
      );
      state.discountPercentageBc = getWhitelistPrice['2'];
    },
    getValidateCoupon(state, action) {
      const getCoupon = action.payload;
      state.isValidCoupon = getCoupon['0'];
      state.discountedPrice = Number(
        new BigNumber(getCoupon['1']).dividedBy(10 ** 6).toFixed(),
      );
    },
    checkPublicSell(state, action) {
      state.isPublicSell = action.payload;
    },
  },
});

export const { actions } = buyNFTSlice;

export const useBuyNFTSlice = () => {
  useInjectReducer({ key: buyNFTSlice.name, reducer: buyNFTSlice.reducer });
  useInjectSaga({ key: buyNFTSlice.name, saga: buyNFTSaga });
  return { actions: buyNFTSlice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
