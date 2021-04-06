import React from "react";

const Modal = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleTabs"
        aria-hidden="true"
        aria-labelledby="exampleModalTabs"
        role="dialog"
        tabindex="-1"
      >
        <div className="modal-dialog modal-simple">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="exampleModalTabs">
                공지사항
              </h4>
            </div>

            <ul className="nav nav-tabs nav-tabs-line" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#exampleLine1"
                  aria-controls="exampleLine1"
                  role="tab"
                >
                  데이터 관련
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#exampleLine2"
                  aria-controls="exampleLine2"
                  role="tab"
                >
                  모바일앱 관련
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#exampleLine3"
                  aria-controls="exampleLine3"
                  role="tab"
                >
                  프로그램 활용
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#exampleLine4"
                  aria-controls="exampleLine4"
                  role="tab"
                >
                  소스코드
                </a>
              </li>
            </ul>

            <div className="modal-body">
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="exampleLine1"
                  role="tabpanel"
                >
                  데이터의 출처는 '지방행정 인허가데이터'입니다. <br />
                  실시간 데이터의 경우 매일 오전9시에 업데이트되며, 2019년,
                  2020년 데이터의 경우 약 820만건의 데이터를 가공하여
                  제작하였습니다.
                </div>

                <div className="tab-pane" id="exampleLine2" role="tabpanel">
                  핸드폰으로 접속시 화면깨짐현상이 발생할 수 있는데, 이는 PC용
                  프로그램이므로 약간의 깨짐현상이 발생할 수 있으며 PC 또는
                  테블릿PC로 접속시 원활하게 이용하실 수 있습니다.
                  <br />
                  또한 안드로이드 유저이신 경우에는 모바일 앱을 제공하고 있으며,
                  아직 구글 앱스토어 승인중에 있어 sungjoon256@gmail.com으로
                  이메일을 주시면 apk 파일을 보내드립니다.
                  <br />
                  모바일 앱을 이용하시면 매일 업데이트되는 정보를 푸시알림으로
                  받아보실 수 있습니다.
                </div>

                <div className="tab-pane" id="exampleLine3" role="tabpanel">
                  이 프로그램을 활용하시고 싶으신 분은 마음껏 활용하셔도 됩니다.
                  <br />
                  단, 실시간 데이터의 경우 업데이트는 하루 전날 데이터를
                  기준으로 업로드하기 때문에 지방행정인허가데이터에 나중에
                  추가된 데이터는 업로드되지 않아 나중에 비교했을 때 정확하지
                  않을 수 있다는점 참고하시어 활용 하시기 바랍니다.
                  <br />
                  또한 2019년, 2020년 데이터를 보실 때 중복되어보이는 데이터들이
                  있을 수 있는데 이것은 같은 가게에서 여러 업종을 개·폐업 했을시
                  같은 가게 이름으로 여러 데이터가 추가될 수 있다는점
                  말씀드립니다.
                </div>

                <div className="tab-pane" id="exampleLine4" role="tabpanel">
                  소스코드는{" "}
                  <a
                    href="https://github.com/dkstjdwns114/three_step_lease"
                    target="_blank"
                  >
                    깃허브
                  </a>
                  에서 참고하실 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
