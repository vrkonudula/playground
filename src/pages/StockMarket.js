import "../css/StockMarket.css";

function StockMarket() {
  return (
    <div id="stockMain">
      <div id="stockContent">
        <div id="stockHead">
          <div id="status">
            <div>Current status : Started...</div>
          </div>
          <div id="controls">
            <div id="operation">
              <button>Start</button>
              <button>Stop</button>
            </div>
            <div id="speed">
              <button>0.5px</button>
              <button>5px</button>
              <button>10px</button>
            </div>
          </div>
        </div>
        <div id="eventContainer">
          <div id="events">
            <div className="event">
              <div className="eventHeading">Replay Clock</div>
              <div className="eventValue">09:30:03.48</div>
            </div>
            <div className="event">
              <div className="eventHeading">Event</div>
              <div className="eventValue">53</div>
            </div>
            <div className="event">
              <div className="eventHeading">Name</div>
              <div className="eventValue">NBBO</div>
            </div>
            <div className="event">
              <div className="eventHeading">Exchange 1</div>
              <div className="eventValue">Q</div>
            </div>
            <div className="event">
              <div className="eventHeading">Price 1</div>
              <div className="eventValue">142.76</div>
            </div>
            <div className="event">
              <div className="eventHeading">Share 1</div>
              <div className="eventValue">400</div>
            </div>
            <div className="event">
              <div className="eventHeading">Exchange 1</div>
              <div className="eventValue">Q</div>
            </div>
            <div className="event">
              <div className="eventHeading">Price 2</div>
              <div className="eventValue">143.13</div>
            </div>
            <div className="event">
              <div className="eventHeading">Share 2</div>
              <div className="eventValue">400</div>
            </div>
            <div className="event">
              <div className="eventHeading">Exchange 2</div>
              <div className="eventValue">Q</div>
            </div>
          </div>
        </div>
        <div id="orderBook">
          <div id="orderBookText">Order Book</div>
        </div>
        <div id="tableContainer">
          <div className="tableLayout">
            <div className="tableHeading">Bids</div>
            <div className="tables">
              <table>
                <tr>
                  <th>Age</th>
                  <th>Exchange</th>
                  <th>Share</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>1.8</td>
                  <td>Q</td>
                  <td>400</td>
                  <td>142.76</td>
                </tr>
                <tr>
                  <td>1.8</td>
                  <td>Q</td>
                  <td>400</td>
                  <td>142.76</td>
                </tr>
                <tr>
                  <td>1.8</td>
                  <td>Q</td>
                  <td>400</td>
                  <td>142.76</td>
                </tr>
                <tr>
                  <td>1.8</td>
                  <td>Q</td>
                  <td>400</td>
                  <td>142.76</td>
                </tr>
                <tr>
                  <td>1.8</td>
                  <td>Q</td>
                  <td>400</td>
                  <td>142.76</td>
                </tr>
                <tr>
                  <td>1.4</td>
                  <td>X</td>
                  <td>1000</td>
                  <td>142.60</td>
                </tr>
                <tr>
                  <td>1.4</td>
                  <td>X</td>
                  <td>1000</td>
                  <td>142.60</td>
                </tr>
                <tr>
                  <td>1.4</td>
                  <td>X</td>
                  <td>1000</td>
                  <td>142.60</td>
                </tr>
                <tr>
                  <td>1.4</td>
                  <td>X</td>
                  <td>1000</td>
                  <td>142.60</td>
                </tr>
                <tr>
                  <td>1.4</td>
                  <td>X</td>
                  <td>1000</td>
                  <td>142.60</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="tableLayout">
            <div className="tableHeading">Asks</div>
            <div className="tables">
              <table>
                <tr>
                  <th>Age</th>
                  <th>Exchange</th>
                  <th>Share</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>143.13</td>
                  <td>400</td>
                  <td>Q</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <td>143.13</td>
                  <td>400</td>
                  <td>Q</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <td>143.13</td>
                  <td>400</td>
                  <td>Q</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <td>143.13</td>
                  <td>400</td>
                  <td>Q</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <td>143.13</td>
                  <td>400</td>
                  <td>Q</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <td>143.21</td>
                  <td>100</td>
                  <td>P</td>
                  <td>2.2</td>
                </tr>
                <tr>
                  <td>143.21</td>
                  <td>100</td>
                  <td>P</td>
                  <td>2.2</td>
                </tr>
                <tr>
                  <td>143.21</td>
                  <td>100</td>
                  <td>P</td>
                  <td>2.2</td>
                </tr>
                <tr>
                  <td>143.21</td>
                  <td>100</td>
                  <td>P</td>
                  <td>2.2</td>
                </tr>
                <tr>
                  <td>143.21</td>
                  <td>100</td>
                  <td>P</td>
                  <td>2.2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockMarket;
