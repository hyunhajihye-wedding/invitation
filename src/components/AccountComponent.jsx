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
              <span className="inner-number">1000-2144-4346</span>
              <div className="inner-name">전현하</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="토스" account="1000-2144-4346" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">농협</span>
              <span className="inner-number">815051-52-199162</span>
              <div className="inner-name">전상식</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="농협" account="815051-52-199162" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">농협</span>
              <span className="inner-number">815051-56-014836</span>
              <div className="inner-name">제지정</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="농협" account="815051-56-014836" />
            </div>
          </div>
        </div>
        <div className="account-item">
          <div className="account-item-title">신부측 계좌번호</div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">토스</span>
              <span className="inner-number">1000-9356-1378</span>
              <div className="inner-name">류지혜</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="토스" account="1000-9356-1378" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">우리</span>
              <span className="inner-number">1002-432-526096</span>
              <div className="inner-name">류재만</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="우리" account="1002-432-526096" />
            </div>
          </div>
          <div className="account-item-text">
            <div className="account-item-text-inner">
              <span className="inner-bank">우리</span>
              <span className="inner-number">277-051879-12-003</span>
              <div className="inner-name">최인영</div>
            </div>
            <div className="account-item-text-copy">
              <AccountCopyComponent bank="우리" account="277-051879-12-003" />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AccountComponent;
