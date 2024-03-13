import React, { useEffect, useState } from "react";
import { NewsApi } from "../redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
import icon from "../../src/images/insta.png"; // add images, please make sure they can be set as src
import 'bootstrap/dist/css/bootstrap.css'; 
const Course = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const newsRes = useSelector((state) => state.newsReducer.token.data);
  console.log("newsRes... ", data);

  useEffect(() => {
    dispatch(NewsApi());
  }, []);

  useEffect(() => {
    if (newsRes && newsRes.data) {
      setData(newsRes.data);
    }
  }, [newsRes]);
  return (
    // <div className="center2">
    //   <h1 className="annoucument">News And Announcement</h1>
    // </div>
    <div className="center2">
      {data &&
        data.map((item) => (
          <div className="margque">
            <marquee width="100%" direction="left" height="300px">

              <div className="contain">
              <div className="heading_description">
                <h1>{`${item.Heading} ${item.startTime}`}</h1>
                <div className="shadowbox">
                  <p className="para">{item.Description}</p>
                </div>
              </div>
              </div>
             
            </marquee>
          </div>
        ))}
      {/* <Ticker>
      <FinancialTicker id="1" change={true} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
      <FinancialTicker id="2" change={true} symbol="AAPL" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
      <FinancialTicker id="3" change={true} symbol="GOOG" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
      <FinancialTicker id="4" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
      <FinancialTicker id="5" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
      <FinancialTicker id="6" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" /> 
       </Ticker> */}

      {data &&
        data.map((item) => (
          <div className="newsticker">
            <Ticker isNewsTicker={true}>
              <NewsTicker
                id={item._id}
                icon={icon}
                title={item.Heading}
                url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
                meta={item.startTime}
              />
            </Ticker>





            
          </div>
        ))}
        <div className="jj d-flex align-item-center">
        <div class="card" style={{
         
          width: '25rem',
          margin: '100px',
        }}>
  <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CSS</h5>
    <p class="card-text">CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages</p>
    <a href="/Kp" class="btn btn-primary">Learn</a>
  </div>
</div>


<div class="card" style={{
         
         width: '25rem',
         margin: '100px',
       }}>
 <img src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/html.jpg" class="card-img-top" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">HTML</h5>
   <p class="card-text">HTML (HyperText Markup Language) is the code that is used to structure a web page and its content</p>
   <a href="/Ht" class="btn btn-primary">Learn</a>
 </div>
</div>

<div class="card" style={{
         
         width: '25rem',
         margin: '100px',
       }}>
 <img src="https://repository-images.githubusercontent.com/200666631/0060c080-d060-11ea-9698-98d89d68fc6d" class="card-img-top" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">JAVA SCRIPT</h5>
   <p class="card-text">JavaScript is a scripting language used to develop web pages.create a dynamic and interactive web page to interact with visitors and execute complex actions</p>
   <a href="/Jx" class="btn btn-primary">Learn</a>
 </div>
</div>

<div class="card" style={{
         
         width: '25rem',
         margin: '100px',
       }}>
 <img src="https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png" class="card-img-top" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">REACT JS</h5>
   <p class="card-text">React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript</p>
   <a href="/Rea" class="btn btn-primary">Learn</a>
 </div>
</div>



</div>



        </div>
    
  );
};

export default Course;
