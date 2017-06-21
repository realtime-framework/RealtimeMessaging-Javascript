## Realtime Cloud Messaging JavaScript SDK
Part of the [The Realtime® Framework](http://framework.realtime.co), Realtime Cloud Messaging (aka ORTC) is a secure, fast and highly scalable cloud-hosted Pub/Sub real-time message broker for web and mobile apps.

If your application has data that needs to be updated in the user’s interface as it changes (e.g. real-time stock quotes or ever changing social news feed) Realtime Cloud Messaging is the reliable, easy, unbelievably fast, “works everywhere” solution.

We have included the source code and licence for the sockjs-client library.

## Installation

If you're using Realtime on a web page, you can install the library via:

#### CDN

```html
<script src="//messaging-public.realtime.co/js/2.1.0/ortc.js"></script>
```

Usage:

```javascript
var client = RealtimeMessaging.createClient();
client.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");
client.connect('YOUR_APPKEY', 'token');

client.onConnected = function(client) {
    console.log("realtime connected");
    client.subscribe("channel", true, function(client, channel, message) {
        console.log("Received message:", message);
    });
}
```

#### Bower

```bash
bower install realtime
```
and then

```html
<script src="bower_components/realtime/dist/ortc-min.js"></script>
```

More about Bower at [http://bower.io/](http://bower.io/)

#### NPM

```bash
npm install realtime-messaging --save
```

and then

```javascript
import * as RealtimeMessaging from 'realtime-messaging';

const client = RealtimeMessaging.createClient();
client.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");
client.connect('YOUR_APPKEY', 'token');

client.onConnected = (client) => {
    console.log("realtime connected");
    client.subscribe("channel", true, (client, channel, message) => {
        console.log("Received message:", message);
    });
}
```

## TypeScript usage in Angular4

```typescript
import {Component, OnInit} from '@angular/core';
import * as Realtime from 'realtime-messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
  constructor() {
    const realtime = Realtime.createClient();
    realtime.setClusterUrl("https://ortc-developers.realtime.co/server/ssl/2.1/");
    realtime.connect("YOUR_APPKEY", "SomeSecurityToken");

    realtime.onConnected = (client: Realtime.Client) => {
      console.log("connected");
      
      // subscribe a channel to receive message
      client.subscribe("myChannel", true, this.onMessage);
    } 
  }

  // A new message was received
  onMessage(client: Realtime.Client, channel: string, message: string) {
    console.log("Received message:", message);
  }
}
```

## Quick Start Guide
[http://messaging-public.realtime.co/documentation/starting-guide/quickstart-js.html](http://messaging-public.realtime.co/documentation/starting-guide/quickstart-js.html)

## API Reference
[http://messaging-public.realtime.co/documentation/javascript/2.1.0/OrtcClient.html](http://messaging-public.realtime.co/documentation/javascript/2.1.0/OrtcClient.html)


## Authors
Realtime.co

