import PropTypes from "prop-types";
import { Copy } from "lucide-react";

import { ToastContainer, toast } from "react-toastify";

const AccountCopyComponent = ({ bank, account }) => {
  const onCopyButtonClick = async () => {
    const copyText = `${bank} ${account}`;
    await navigator.clipboard.writeText(copyText);
    toast.success("계좌번호가 복사 되었습니다.", {
      className: "black-background",
      position: "bottom-center",
      autoClose: 1000,
      closeButton: false,
      hideProgressBar: true,
    });
  };

  return (
    <button onClick={onCopyButtonClick}>
      <span className="copy-icon">
        <Copy style={{ width: "1rem" }} />
      </span>
      <span className="copy-label">복사</span>
      <ToastContainer />
    </button>
  );
};

AccountCopyComponent.propTypes = {
  bank: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
};

export default AccountCopyComponent;
