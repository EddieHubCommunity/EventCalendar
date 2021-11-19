[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EddieHubCommunity/EventCalendar)
# Community event calendar

The goal of this project is to list all our awesome community virtual events like TwitterSpaces, Live Streams all in one place so we do not miss any events and also do not have clashes!

![screenshot](https://user-images.githubusercontent.com/624760/140585091-e114d767-895e-45ba-9a37-58ad4a192374.png)

## Adding your event

To add your virtual event to the calendar, please create a `json` file in the `public/data` directory.

Here is an example file...

**TYPES** currently supports `youtube` and `twitter`

```json
{
  "type": "youtube",
  "author": {
    "name": "Eddie Jaoude",
    "url": "http://github.com/eddiejaoude"
  },
  "url": "http://twitter.com/eddiejaoude",
  "title": "Awesome LIVE stream on stuff",
  "start": "2021-11-06T17:00:00",
  "end": "2021-11-06T19:00:00",
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

## 💪 Thanks to the all Contributors

Thanks a lot for spending your time helping EventCalender grow. Thanks a lot! Keep rocking 🍻
[contributors](https://github.com/EddieHubCommunity/EventCalendar/graphs/contributors)

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
