import { Canvas } from "@react-three/fiber";
import GolfScreen from "./GolfScreen";

const Game = () => {
  return (
    <div className="game-section">
      <div className="grid-two-part">
        <div className="window">
          <div className="golf-outter">
            <Canvas className="mainCanvas">
              <GolfScreen />
            </Canvas>
          </div>
        </div>
        <div className="info">
          <h1>
            Golf ⛳<br />
            joint card for Handicapping
          </h1>
          <p>
            Mark your strokes after every hole.
            <br />
            <span>
              ** The users will have to enter PAR and Yards for every hole
              before playing their round.
            </span>
          </p>
        </div>
      </div>
      <p className="littleInfo">
        ** The following is just a simple ledgure of your game.
      </p>
      <div className="handicapping-table-outter">
        <table>
          <tr>
            <th>Hole No.</th>
            <th>Yards</th>
            <th>PAR</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Player 3</th>
            <th>Player 4</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <input type="number" maxLength="2" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
            <td>
              <input type="number" pattern="[0-9]*" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Game;
