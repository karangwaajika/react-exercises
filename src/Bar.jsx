import "./css/bar.css";
import { tenHighestPopulation } from "./assets/population";

const addComma = (nbr) => {
  const nbrString = nbr.toString().split("").reverse();
  const nbrWithComma = [...nbrString];
  let count = 0;
  for (let i = 0; i < nbrString.length; i++) {
    if ((i + 1) % 3 == 0 && i + 1 != nbrString.length) {
      let index = count + i + 1;
      nbrWithComma.splice(index, 0, ",");
      count++;
    }
  }
  return nbrWithComma.reverse().reduce((str, item) => str + item, "");
};

const Bar = ({ country: { country, population }, totPopulation }) => {
  let average = (population * 100) / 7693165599;
  return (
    <div className="container">
      <div className="item name">{country}</div>
      <div className="bar">
        <div style={{ backgroundColor: "orange", width: average + "%" }}></div>
      </div>
      <div className="item">{addComma(population)}</div>
    </div>
  );
};

const Bars = () => {
  let totPopulation = tenHighestPopulation.reduce(
    (tot, country) => tot + country.population,
    0
  );
  return (
    <div>
      <h1 style={{fontWeight:200}}>Statistics</h1>
      <p>Made the following bar group using the given <a href="https://github.com/Asabeneh/30-Days-Of-React/blob/master/06_Day_Map_List_Keys/06_map_list_keys_boilerplate/src/data/ten_most_highest_populations.js" style={{fontWeight:"bold",color:"black"}}>data</a> </p>
      <div className="bars">
        {tenHighestPopulation.map((country) => (
          <Bar country={country} totPopulation={totPopulation} />
        ))}
      </div>
    </div>
  );
};

export default Bars;
