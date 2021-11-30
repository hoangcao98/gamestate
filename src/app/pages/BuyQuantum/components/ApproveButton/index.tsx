// import DfyButton from 'app/components/DfyButton';
import { useEffect, useState } from 'react';
import {
  checkApprove,
  createApprove,
} from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { isEmpty } from 'lodash';
import { CircularProgress, Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import BigNumber from 'bignumber.js';

interface Props {
  curAddress: string;
  tokenSymbol: string;
  toAddress: string;
  amount: string;
  handleAction: any;
}

const ApproveButton = (props: Props) => {
  //init something
  const { curAddress, tokenSymbol, toAddress, amount, handleAction } = props;
  const [allowance, setAllowance] = useState<Number>();
  const [receipt, setReceipt] = useState();
  const [loading, setLoading] = useState(false);

  //create approve
  const handleApprove = async () => {
    setLoading(true);
    try {
      const tx = await createApprove(
        curAddress,
        tokenSymbol,
        toAddress,
        amount,
      );
      const receipt = await signAndSendTx(tx);
      setReceipt(receipt);
      setLoading(false);
      handleAction(true);
    } catch (error) {
      setLoading(false);
    }
  };

  //checkApprove
  useEffect(() => {
    (async () => {
      const res = await checkApprove(
        curAddress,
        tokenSymbol,
        toAddress,
        amount,
      );
      const resDiv18 = Number(new BigNumber(res).dividedBy(10 ** 18).toFixed());
      console.log(resDiv18, 'checkapprove');
      if (resDiv18 >= Number(amount)) {
        handleAction(true);
      }
      setAllowance(resDiv18);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {allowance! < Number(amount) && isEmpty(receipt) && loading === false && (
        <Button onClick={handleApprove}>Approve</Button>
      )}
      {allowance! < Number(amount) &&
        !isEmpty(receipt) &&
        loading === false && <Button disabled>Approved</Button>}
      {loading === true && (
        <Button disabled variant="contained">
          <CircularProgress size={19} color="inherit" />
        </Button>
      )}
    </>
  );
};

export default ApproveButton;