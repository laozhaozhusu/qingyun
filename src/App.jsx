import { useState } from "react";

import List from "./view/List";
import Detail from "./view/Detail";

function App() {
  const [isList, setIsList] = useState(true);
  const [item, setItem] = useState(null);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ padding: "20px" }}>
        {isList ? (
          <List setItem={setItem} setIsList={setIsList}></List>
        ) : (
          <Detail item={item} setIsList={setIsList}></Detail>
        )}
      </div>
    </div>
  );
}

export default App;
