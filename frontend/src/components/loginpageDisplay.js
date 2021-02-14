import React from "react";


import "./loginPage.scss";
const Details = (props) => {
  const {
    registerHandler,
    loginHandler,
    login,
    register,
    signupHandler,
    signupInputName,
    signupInputEmail,
    signupInputPassword,
    signupError,
    signinInputEmail,
    signinInputPassword,
    signInHandler,
    signinError,
  } = props;
  const FlipClass = login && "flip";
  const RegTitleClass = register && "extregtitle";
  const LogTitleClass = login && "extlogtitle";

  return (
    <div className="loginRow">
      
      <div className="col loginCol">
        <div className="contentRow">
          <div className="content">
            <div className="regGrp">
              <h4
                className={`regtitle ${RegTitleClass}`}
                onClick={registerHandler}
              >
                REGISTER
              </h4>

              <h4
                className={`logtitle ${LogTitleClass}`}
                onClick={loginHandler}
              >
                LOGIN
              </h4>
            </div>

            <div className="flip-container">
              <div className={`flipper ${FlipClass} `} id="flipper">
                {register && (
                  <div className="register">
                    <div>
                      <label htmlFor="name">NAME</label>
                      <input onChange={signupInputName} type="text" id="name" />
                    </div>
                    <div>
                      <label htmlFor="email">EMAIL</label>
                      <input
                        onChange={signupInputEmail}
                        type="email"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        onChange={signupInputPassword}
                        type="password"
                        id="password"
                      />
                    </div>
                    <small className="signupError">{signupError}</small>
                    <button onClick={signupHandler} className="regbutt">
                      SIGN UP
                    </button>
                  </div>
                )}

                {login && (
                  <div className="login">
                    <div>
                      <label htmlFor="email">EMAIL</label>
                      <input
                        onChange={signinInputEmail}
                        type="email"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">PASSWORD</label>
                      <input
                        onChange={signinInputPassword}
                        type="password"
                        id="password"
                      />
                    </div>
                    <small className="signinError">{signinError}</small>
                    <button onClick={signInHandler} className="logbutt">
                      SIGN IN
                    </button>

                    

                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;