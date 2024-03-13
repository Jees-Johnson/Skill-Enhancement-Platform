import React from "react";
import { useSelector } from "react-redux";


const Dashboard = () => {

  const LoginRes = useSelector((state) => state.logIn.token.data);
  console.log('sfsf... ', LoginRes);

  return (
    <>
      <div>
        <div className="sidescreen">
          <h1 className="side-heading">KL</h1>

          <img className="icons" src="./images/Vector.png" />
          <img className="icons" src="./images/cap.png" />
          <img className="icons" src="./images/setting.png" />
          <img id="lasticon" className="icons" src="./images//exit.png" />
        </div>
        <div className="mainscreen">
          <div className="header">
            <div className="leftsection">
              <h1>Hello Krishna!</h1>
              <p>its good to see you again</p>
            </div>
            <div className="rightsection">
              <div className="searchbar">
             
                <input className="inpt" placeholder="serachcourse" />
              </div>
              <div className="notification">
                <img className="bellicon" src="./i" alt="" />
                
              </div>
            </div>
          </div>
          <div className="center">
            <h1 className="annoucument">News And Announcement</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
