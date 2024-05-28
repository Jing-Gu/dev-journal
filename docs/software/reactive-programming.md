# Reactive programming
Reactive programming is all about writing code that observes **events** (user actions) and **state** (data), so that our app can react to changes. For each event or state that we want to track, we sign up to receive notifications when event occurs or state changes. When the code receives a notification, it reacts to the notification, so that our app is more responsive and provides a better user experience.

## RxJS
RxJS is used to compose observable data streams, means that we
1) observe events and data from a particular source over time, such as keyboard events, routing events or control value changes
2) subscribe to receive a notification when events occur or data is emitted
3) react to the notification and perform an operation

## RxJS + Signals: Better together
| Signals                | RxJS                   |
|------------------------|------------------------|
| Observe state (variable value) | Observe events or data that arrive over time |
| Notify when the state changes  | Notify when the event occurs, or data is emitted |
| React to notif: recalculate, re-render part of the template | React to notif |
| Always hold a value | Does not hold a value, values emitted over time |
| e.g. re-calculate a subtotal in the shopping cart | e.g. react to keystrokes and receive notifs whenever user types |