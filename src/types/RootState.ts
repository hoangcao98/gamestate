// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { ApproveNFTState } from 'app/pages/BuyQuantum/components/ApproveButton/slice/types';
import { BuyNftState } from 'app/pages/BuyQuantum/slice/types';
import { OrderNFTState } from 'app/pages/Order/slice/types';
import { DetailNFTState } from 'app/pages/DetailNft/slice/types';
import { WearableNFTState } from 'app/pages/Wearable/slice/types';
import { DetailQAState } from 'app/pages/DetailQA/slice/types';

import { GlobalState } from '../store/globalReducer';
import { WalletState } from 'app/components/Wallet/slice/types';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  globalState?: GlobalState;
  wallet?: WalletState;
  buyNFT?: BuyNftState;
  approveNFT?: ApproveNFTState;
  orderNFT?: OrderNFTState;
  detailNFT?: DetailNFTState;
  wearableNFT?: WearableNFTState;
  detailQA?: DetailQAState;
}
