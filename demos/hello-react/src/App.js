import { useState, useRef, useEffect } from "react";

const styles = {
  App: {
    textAlign: "center",
  },
  AppLogo: {
    height: "128px",
    marginBottom: "32px",
    pointerEvents: "none",
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontFamily: "Open Sans",
    color: "white",
    lineHeight: "32px",
    fontWeight: "200",
  },
  AppLink: {
    color: "#0090D0",
  },
};

function App() {
  const [value, setValue] = useState("Rudy");
  const [count, setCount] = useState(0);

  return (
    <div style={styles.App} className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap&subset=cyrillic-ext"
        rel="stylesheet"
      />
      <div style={styles.AppHeader} className="App-header">
        <img
          src="https://img.alicdn.com/imgextra/i4/O1CN01aT5xVM1lbORGlfbfn_!!6000000004837-2-tps-492-437.png"
          style={styles.AppLogo}
          className="App-logo"
          alt="logo"
        />
        <span>2</span>
        <p>
          Ahoj, <strong>{value}</strong>
        </p>
        <input
          type="text"
          value={value}
          style={{ display: "block" }}
          onChange={(e) => setValue("Change")}
          onInput={(e) => setValue("Input")}
          oninput={(e) => setValue("input")}
          onchange={(e) => setValue("change")}
        />
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
