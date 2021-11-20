import "./App.css";

import React, { useState, useEffect } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { DataView } from "primereact/dataview";
import { Chip } from "primereact/chip";
import { Menubar } from "primereact/menubar";

// eslint-disable-next-line
import { Calendar } from "@fullcalendar/core";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import Footer from "./Components/Footer";

function App() {
  const fullCalendarOptions = {
    plugins: [dayGridPlugin],
    defaultView: "dayGridMonth",
  };

  const colors = {
    twitter: {
      background: "blue",
      color: "white",
    },
    youtube: {
      background: "red",
      color: "white",
    },
    discord: {
      background: "#5865F2",
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
      <div className="list-item">
        <div className="image-container">
          <i
            className={`pi pi-${data.platform} list-category-icon p-p-2 p-shadow-9 pointer`}
            style={{
              fontSize: "5em",
              background: colors[data.platform].background,
              color: colors[data.platform].color,
            }}
            onClick={() => (window.location = data.url)}
          ></i>
        </div>
        <div className="list-detail">
          <h5
            className="p-mb-2 pointer"
            onClick={() => (window.location = data.url)}
          >
            {data.title}
          </h5>
          <span className="list-category">{data.description}</span>
        </div>
        <div className="list-action">
          <span>{new Date(data.start).toDateString()}</span>
          <span>{new Date(data.start).toTimeString()}</span>
          <span>
            <i className="pi pi-tag list-category-icon"></i>
            <span
              className="list-category"
              style={{
                color: colors[data.platform].background,
              }}
            >
              {data.type}
            </span>
          </span>
        </div>
      </div>
    );
  };

  const renderGridItem = (data) => {
    return <div className="p-dataview-grid">Not implemented yet</div>;
  };

  return (
    <>
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

      <main>
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
            className="p-mx-3 p-mt-6 p-mb-3 p-mx-md-6"
            options={fullCalendarOptions}
            events={events}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
