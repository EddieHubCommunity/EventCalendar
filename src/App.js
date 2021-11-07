import "./App.css";

import React, { useState, useEffect } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { DataView } from "primereact/dataview";
import { Chip } from "primereact/chip";
import { Menubar } from "primereact/menubar";

// import FullCalendar from "@fullcalendar/react";
import { Calendar} from '@fullcalendar/core';
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {

  const fullCalendarOptions = {
    plugins: [ dayGridPlugin ],
    defaultView: 'dayGridMonth'
  }
  
  const colors = {
    twitter: {
      background: "blue",
      color: "white",
    },
    youtube: {
      background: "red",
      color: "white",
    },
  };

  const [display, setDisplay] = useState("calendar");
  const [events, setEvents] = useState([]);
  const navBar = [
    // {
    //   label: "Grid",
    //   icon: "pi pi-fw pi-th-large",
    //   command: () => {
    //     setDisplay("grid");
    //   },
    // },
    {
      label: "Calendar",
      icon: "pi pi-fw pi-calendar",
      command: () => {
        setDisplay("calendar");
      },
    },
    {
      label: "List",
      icon: "pi pi-fw pi-list",
      command: () => {
        setDisplay("list");
      },
    },
  ];

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) =>
        data.sort((a, b) => new Date(a.start) - new Date(b.start))
      )
      .then((data) => setEvents(data));
  }, []);

  const renderListItem = (data) => {
    return (
      <>
        <div
          className="p-dataview-header"
          onClick={() => (window.location = data.url)}
        >
          <Chip
            label={data.title}
            icon={`pi pi-${data.type}`}
            style={{
              background: colors[data.type].background,
              color: colors[data.type].color,
            }}
          />
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div className="p-dataview-footer">Added by {data.author.name}</div>
      </>
    );
  };

  const renderGridItem = (data) => {
    return <div className="p-dataview-grid">Not implemented yet</div>;
  };

  return (
    <div>
      <header>
        <Menubar
          model={navBar}
          end={
            <a href="https://github.com/EddieHubCommunity/EventCalendar">
              <i className="pi pi-github" style={{ fontSize: "2em" }}></i>
            </a>
          }
        />
      </header>

      <div>
        {display !== "calendar" && (
          <DataView
            value={events.filter((item) => new Date(item.start) > new Date())}
            layout={display}
            itemTemplate={display === "list" ? renderListItem : renderGridItem}
            paginator
            rows={10}
          />
        )}

        {display === "calendar" && (
          <FullCalendar
            options={fullCalendarOptions}
            events={events}
          />
        )}
      </div>
    </div>
  );
}

export default App;
