import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Card } from "primereact/card";

function App() {
  const events = [
    {
      type: "TwitterSpace", // Live Stream
      location: {
        type: "virtual",
        address: "London",
      },
      url: "http://eddiehub.org",
      author: "Eddie Jaoude",
      host: "Nick",
      title: "All Day Event very long title",
      date: {
        start: "2019-01-01",
        end: "2019-01-02",
      },
      time: {
        start: "0800",
        end: "1000",
        timezone: "UTC",
      },
      description:
        "Event description Event description Event description Event description Event description Event description Event description Event description Event description Event description Event description Event description Event description",
    },
  ];

  return (
    <div>
      <header>
        <h1>Community event calendar</h1>
      </header>

      {events.map((event, index) => (
        <Card 
          title={event.title} 
          subTitle={event.date.start}
          key={`${index}-${event.description}`}
        >
          {event.description}
        </Card>
      ))}
    </div>
  );
}

export default App;
