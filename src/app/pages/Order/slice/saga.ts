// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { put, takeLatest, all, takeEvery } from '@redux-saga/core/effects';
import { watch } from 'fs';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import { getTokenId } from 'services/walletService/nftService/getNft';
import actionNftAbi from 'services/walletService/config/actionNft.abi.json';

function* handleOrderNFT(action) {
  const spender = process.env.REACT_APP_NFT_ADDRESS;
  const curAddress = action.payload;
  console.log('cur', curAddress);
  try {
    if (localStorage.getItem('extensionName')) {
      const instanceValue = Web3.getInstance;
      yield instanceValue.setWeb3();
      const web3: any = instanceValue.getWeb3();
      const buyContract = new web3.eth.Contract(actionNftAbi, spender);
      const txData = yield buyContract.methods
        .getOwnedTokenIds(curAddress)
        .call();
      console.log('data', txData);
      yield put(actions.orderNFTSuccess(txData));
      // setData(tokenId?.txData);
    }
  } catch (err) {}
}
function* watchHandleOrderNFT() {
  yield takeLatest(actions.orderNFTRequest, handleOrderNFT);
}

export function* OrderNFTSaga() {
  yield all([watchHandleOrderNFT()]);
  // yield takeLatest(actions.someAction.type, doSomething);
}
