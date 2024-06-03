const hexColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Hexa = () => {
  const arr = [0, 1, 2, 3, 5];
  const bgColor = hexColor();
  const styl = {
    backgroundColor: bgColor,
  };
  const deco = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <main>
      <h1 style={{fontWeight: 200}}>Hexadecimal Color</h1>
      <p>Generating a random Hexadecimal color</p>
      <div style={deco}>
        {arr.map((item, i) => (
          <div key={i} style={{ backgroundColor: hexColor() }}>{hexColor()}</div>
        ))}
      </div>
    </main>
  );
};

export default Hexa;
