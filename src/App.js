import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Card } from "primereact/card";

function App() {
  return (
    <div>
      <header>
        <h1>Community event calendar</h1>
        <Card title="Title" subTitle="SubTitle">
          Content
        </Card>
      </header>
    </div>
  );
}

export default App;
