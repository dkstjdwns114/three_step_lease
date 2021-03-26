import React from "react";
import PolarChart from "../Chart/PolarChart";

const StandardTabs = (props) => {
  return (
    <>
      <div className="example-wrap">
        <div className="nav-tabs-horizontal" data-plugin="tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#exampleTabsOne"
                aria-controls="exampleTabsOne"
                role="tab"
              >
                동물
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsTwo"
                aria-controls="exampleTabsTwo"
                role="tab"
              >
                문화
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsThree"
                aria-controls="exampleTabsThree"
                role="tab"
              >
                자연환경
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsFour"
                aria-controls="exampleTabsFour"
                role="tab"
              >
                식품
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsFive"
                aria-controls="exampleTabsFive"
                role="tab"
              >
                건강
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsSix"
                aria-controls="exampleTabsSix"
                role="tab"
              >
                생활
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#exampleTabsSeven"
                aria-controls="exampleTabsSeven"
                role="tab"
              >
                기타
              </a>
            </li>
          </ul>
          <div className="tab-content pt-20">
            <div
              className="tab-pane active"
              id="exampleTabsOne"
              role="tabpanel"
            >
              <PolarChart />
            </div>
            <div className="tab-pane" id="exampleTabsTwo" role="tabpanel">
              Negant parvos fructu nostram mutans supplicii ac dissentias, maius
              tibi licebit ruinae philosophia. Salutatus repellere titillaret
              expetendum ipsi. Cupiditates intellegam exercitumque privatio
              concederetur, sempiternum, verbis malint dissensio nullas
              noctesque earumque.
            </div>
            <div className="tab-pane" id="exampleTabsThree" role="tabpanel">
              Benivole horrent tantalo fuisset adamare fugiendam tractatos
              indicaverunt animis chaere, brevi minuendas, ubi angoribus iisque
              deorsum audita haec dedocendi utilitas. Panaetium erimus platonem
              varias imperitos animum, iudiciorumque operis multa disputando.
            </div>
            <div className="tab-pane" id="exampleTabsFour" role="tabpanel">
              Metus subtilius texit consilio fugiendam, opinionum levius amici
              inertissimae pecuniae tribus ordiamur, alienus artes solitudo,
              minime praesidia proficiscuntur reiciat detracta involuta veterum.
              Rutilius quis honestatis hominum, quisquis percussit sibi
              explicari.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StandardTabs;
