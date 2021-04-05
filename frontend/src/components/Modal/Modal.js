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
                Tabs In Modal
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
                  Home
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
                  Components
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
                  CSS
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
                  JavaScript
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
                  Insolens patientiamque recte caecilii gaudere alienae varias
                  repetitis inscientia ipsos. Partiendo interpretum vult ludicra
                  iam abest disputatum geometriaque inflammat probes, tandem
                  ullum iuste texit mundus delicatissimi iactare, impeditur
                  panaetium intellegentium afferat talem satisfacit numquid
                  accedunt secumque perspiciatis, invenire inquam voluptaria
                  virtute concederetur genus suavitate, inviti argumentum
                  parentes, repudiandae aliud perspiciatis, latinas consul
                  pluribus regula ceramico turbent, cogitavisse possunt suo
                  tranquillitate.
                </div>

                <div className="tab-pane" id="exampleLine2" role="tabpanel">
                  Tenuit omni magistra quale honoris, maluisti invidi,
                  successerit feramus fere omnium impetum locus suscipiantur
                  ullum, gessisse afranius stabilique repellendus longinquitate
                  sentiamus torquatos rem. Bene continens, depulsa soluta
                  domesticarum inscientia excruciant artes epicuri, huic
                  similique constringendos probo animadversionis claris
                  sententia atqui vocent constituit, epicuri hosti iniuste
                  naturales multos, optimus animadvertat stoicis nullae, fieri
                  futura tempore philosophia expleantur putarent doloris
                  delectus viris.
                </div>

                <div className="tab-pane" id="exampleLine3" role="tabpanel">
                  Cernimus nutu. Maioribus solet. Iustitiam conciliant
                  reliquisti instituendarum solido quicquid, superstitione
                  placet illis privatione clariora audeam repellat morbos
                  accusantibus, quaeso copulationes. Percurri salutatus
                  derigatur praeter involuta canes afflueret iam amotio quin.
                  Dicent dialectica evertunt astris venire senserit. Vulgo
                  supplicii amputata ipsarum ennius insolens meminerunt
                  quisquam, volumus occulte l videor contenta numen, patrioque.
                  Dixerit cernimus consequentium definitiones interrogari,
                  maximo, avocent opes.
                </div>

                <div className="tab-pane" id="exampleLine4" role="tabpanel">
                  Nec iste vellem, accusamus inesse exhorrescere tertium
                  dominationis licebit perpetiuntur, adduci concederetur
                  memoriter omnesque aliquem etsi salutatus administrari aliquid
                  graviter, mandamus celeritas patet fortibus. Dolorum tantis
                  nostram fortitudo probarentur utrumvis insipientiam, putent,
                  esset p fortitudo repetitis concursionibus interiret clariora.
                  Fabulae aperiri. Omnes aspernari placuit detraxit familias
                  aeternum eum mediocritatem, videantur partis nondum indoctis,
                  emancipaverat probatum intus iactant petulantes, levitatibus
                  copiosae.
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
