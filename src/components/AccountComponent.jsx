import AccountCopyComponent from "./AccountCopyComponent";
import CommonHeader from "./CommonHeader";
import ComponentWrapper from "./ComponentWrapper";

const AccountComponent = () => {
  return (
    <ComponentWrapper>
      <CommonHeader title="마음 전하실 곳"></CommonHeader>
      <div className="account-items-wrapper">
        <div className="account-item">
          <div className="account-item-title">신랑측 계좌번호</div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">토스</span>
              <span className="inner-number">123-123-123-123</span>
              <div className="inner-name">전현하</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="신한" account="123-123-123-123" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">신한</span>
              <span className="inner-number">123-123-123-123</span>
              <div className="inner-name">전현하</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="신한" account="123-123-123-123" />
            </div>
          </div>
        </div>
        <div className="account-item">
          <div className="account-item-title">신부측 계좌번호</div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">신한</span>
              <span className="inner-number">123-123-123-123</span>
              <div className="inner-name">전현하</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="신한" account="123-123-123-123" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">신한</span>
              <span className="inner-number">123-123-123-123</span>
              <div className="inner-name">전현하</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="신한" account="123-123-123-123" />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AccountComponent;
