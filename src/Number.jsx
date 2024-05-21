const blockColor = (number) => {
  let color = "";
  let isPrime = true;
  if (number == 0) {
    color = "green";
  } else if (number == 1) {
    color = "yellow";
  } else {
    let count = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        count++;
      }
      if (count > 1) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      color = "red";
    } else if (number % 2 == 0) {
      color = "green";
    } else {
      color = "yellow";
    }
  }

  return color;
};

const Block = () => {
  const myList = [];
  let nbr = 0;
  while (nbr <= 31) {
    myList.push(nbr);
    nbr++;
  }
  const deco = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <main>
      <h1 style={{ fontWeight: 200 }}>Number Generator</h1>

      <div style={deco}>
        {myList.map((nbr) => (
          <div
            key={nbr}
            style={{
              backgroundColor: blockColor(nbr),
              color: "white",
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            {nbr}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Block;
