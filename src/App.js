import './App.css';
import { useState ,useEffect} from 'react';
import Quiz from './components/quizbody/Quiz'
import {Data} from './Data';
import Timer from './components/timer/Timer'
function App() {
  const [queNum, setqueNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned] =useState(0);
  const priceObj=[{id:1,price:100},{id:2,price:200},{id:3,price:300},{id:4,price:500},{id:5,price:1000},{id:6,price:2000},{id:7,price:4000},{id:8,price:8000},{id:9,price:16000},{id:10,price:32000},{id:11,price:64000},{id:12,price:120000},{id:13,price:250000},{id:14,price:1000000}].reverse();
  // const priceObj=useMemo(()=>
  //   priceArr
  // ,)
  useEffect(() => {

    queNum > 1 && setEarned(priceObj.find((x)=> x.id ===queNum-1)?.price);
  }, [priceObj,queNum]);
  return (
    <div className="app">
      <div className="main">
        {
          stop ? <h1 className='earnText'>You earned: {earned}</h1>:(
            <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} queNum={queNum}/></div>
        </div>
        <div className="bottom">
          <Quiz data={Data} setStop={setStop} setqueNum={setqueNum} queNum={queNum}/>
        </div>
        </>
        )
        }

      </div>
      <div className="pyramid">
        <ul className='PriceList'>
          {
            priceObj.map((ele)=>{
              return <li className={queNum === ele.id ? "priceList_item active":"priceList_item"}>
              <span className="priceList_item_Number">{ele.id}</span>
              <span className="priceList_item_Price">$ {ele.price}</span>
            </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;