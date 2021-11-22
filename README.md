[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EddieHubCommunity/EventCalendar)
# Community event calendar

The goal of this project is to list all our awesome community virtual events like TwitterSpaces, Live Streams all in one place so we do not miss any events and also do not have clashes!

![screenshot](https://user-images.githubusercontent.com/624760/140585091-e114d767-895e-45ba-9a37-58ad4a192374.png)

## Adding your event

To add your virtual event to the calendar, please create a `json` file in the `public/data` directory.

Here is an example file...

**TYPES** currently supports `youtube`, `twitter`, `discord`.
**TIMEZONES** make sure you add the timezone to the `start` and `end` fields., then the browser will adjust the time to the timezone of the event.

```json
{
  "type": "youtube",
  "author": {
    "name": "Eddie Jaoude",
    "url": "http://github.com/eddiejaoude"
  },
  "url": "http://twitter.com/eddiejaoude",
  "title": "Awesome LIVE stream on stuff",
  "start": "2021-11-20T15:00:00+00:00",
  "end": "2021-11-20T16:00:00+00:00",
  "description": "We will use ReactJS to build a community calendar for all our virtual geek out sessions"
}
```

## QuickStart

1. Fork this repo
2. Clone your fork
3. Add the original repo as an upstream to your fork with `git remote add origin git@github.com:EddieHubCommunity/EventCalendar.git`
4. Run `npm ci` to install dependencies
5. Run `npm run generate` to generate the calendar list data (do not change this file, it will be ignored by git)
6. Run `npm start` to start the server
7. Visit http://localhost:3000

## 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 💪 Thanks to the all Contributors

Thanks a lot for spending your time helping EventCalendar grow. Thanks a lot! Keep rocking 🍻
[contributors](https://github.com/EddieHubCommunity/EventCalendar/graphs/contributors)
