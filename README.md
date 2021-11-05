# Community event calendar

The goal of this project is to list all our awesome community virtual events like TwitterSpaces, Live Streams in one place so we do not miss any and also do not have clashes!

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

1. fork repo
2. clone your fork
3. add the original repo as an upstream to your fork with `git remote add origin git@github.com:EddieHubCommunity/EventCalendar.git`
4. run `npm ci` to install dependencies
5. run `npm run generate` to generate the calendar list data (do not change this file, it will be ignored by git)
6. run `npm start` to start the server
7. visit http://localhost:3000

