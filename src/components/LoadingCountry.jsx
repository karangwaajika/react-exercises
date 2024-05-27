import React, { useState } from "react";
import "../css/country.css";
import data from "../assets/data.json";
import loading from "../assets/ajax-loading.gif";
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

const CardDetails = (props) => {
  const { name, population, flag, lang, capital } = props;
  return (
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
  );
};
const Card = ({ data }) => {
  const fetchIndex = () => Math.floor(Math.random() * 100);
  const [id, setId] = useState(0);
  const { name, capital, population, flag, languages } = data[id];
  const lang = languages.map((item) => item.name).join(",");

  const [loadImage, setLoading] = useState(true);

  const changeCountry = () => {
    setId(fetchIndex());
  };

  const waitLoading = () => {
    setLoading(!loadImage);
    setTimeout(2000);
    changeCountry();
  };
  setInterval(waitLoading, 5000);

  let displ;
  if (loadImage) {
    displ = (
      <CardDetails
        name={name}
        capital={capital}
        population={population}
        flag={flag}
        lang={lang}
      />
    );
  } else {
    const styleImage = {
      backgroundColor: "white",
      width: "100px",
      height: "100px",
      border: "1px solid white",
      borderRadius: "50%",
      marginTop: "15%",
    };
    displ = (
      <div className="card">
        <img src={loading} style={styleImage} width={200} height={200} />
      </div>
    );
  }
  return (
    <section>
      {displ}
      {waitLoading}
    </section>
  );
};
function LoadingCountry() {
  return (
    <div>
      <h1 style={{ fontWeight: 200 }}>Country Auto-Selecting</h1>
      <p>
        There's a time interval of five seconds to load the next country with a
        loading image while waiting for the next country to display
      </p>
      <Card data={data} />
    </div>
  );
}

export default LoadingCountry;
