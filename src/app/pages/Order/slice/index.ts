import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { OrderNFTSaga } from './saga';
import { OrderNFTState } from './types';

export const initialState: OrderNFTState = {
  data: [],
  listAllNft: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'orderNFT',
  initialState,
  reducers: {
    orderNFTRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    orderNFTSuccess(state, action) {
      state.data = action.payload;
    },
    listQASuccess(state, action) {
      state.listAllNft = action.payload;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { actions } = slice;

export const useOrderNFTSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderNFTSaga });
  return { actions: slice.actions };
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
