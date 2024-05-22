import React, { useState } from "react";
import "../css/country.css";
import data from "../assets/data.json";
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
const Card = ({ data }) => {
  const fetchIndex = () => Math.floor(Math.random() * 100);
  const [id, setId] = useState(0);
  const { name, capital, population, flag, languages } = data[id];
  const changeCountry = () => {
    setId(fetchIndex());
  };
  
  
  const lang = languages.map((item)=> item.name).join(',');
 
  return (
    
    <section>
      <div className="card">
        <div className="card-country">
          <div className="flag">
            <img src={flag} alt="flag" />
          </div>
          <p>{name}</p>
        </div>

        <div className="country-container">
          <div className="item">
            <strong>Name</strong>: {name}
          </div>
          <div className="item">
            <strong>Capital</strong>: {capital}
          </div>
          <div className="item">
            <strong>Language</strong>: {lang}
          </div>
          <div className="item">
            <strong>Population</strong>: {addComma(population)}
          </div>
        </div>
      </div>
      <button onClick={changeCountry}>Click</button>
    </section>
  );
};
function Country() {
  return (
    <div>
      <h1 style={{ fontWeight: 200 }}>Selecting Country</h1>
      <p>
        Countries are retrieved using the given{" "}
        <a
          href="https://github.com/karangwaajika/rest-countries-api/blob/main/data.json"
          style={{ fontWeight: "bold", color: "black" }}
        >
          data
        </a>
      </p>
      <Card data={data} />
    </div>
  );
}

export default Country;
