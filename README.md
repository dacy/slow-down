# 慢 · slow

A small companion that doesn't try to make you more productive.

Five practices, in any order, in any amount:

- **坐一会 / Sit awhile** — breathe with a circle. Gentle nudges arrive on their own; the later ones suggest you can leave.
- **观察一下 / Notice** — a single question for the day, and a scratch space. Nothing is saved. Write what you want, then let it go.
- **不做 / Not-doing** — a small daily list of things you are choosing not to do. Empties tomorrow.
- **念几句 / Read a line** — a rotating passage from people who have thought about this for a long time. Zhuangzi, Laozi, Su Shi, Seneca, Marcus Aurelius, Rilke, Hesse, Burkeman, Pico Iyer, others.
- **够了 / It's enough** — a permission slip, plainly written. _"Today, you don't have to be the strongest, fastest, busiest one. No one was handing out medals."_ Fifty of them, per language.

There is also a quiet "say it once" link in the home footer, for when even the longer practices feel like too much. Pressing it fades everything away and shows, in three breaths:

> You are enough.
> Right now.
> As you are.

## How to use it

Open `index.html` in a browser. There is no build step. There is no server. There is no account.

The page reads from your browser's clock to choose a time-of-day greeting on the home page, today's Notice question, and today's slip. It uses `localStorage` for two things: your language preference (zh / en) and the day's not-doing list (which empties on the next day-roll). Nothing else is stored. Nothing is sent anywhere.

## Design principles

- No streaks, counters, progress bars, achievements, daily reminders.
- No notifications, push messages, "come back tomorrow."
- No accounts, no signup, no email.
- No telemetry, analytics, "share this" buttons.
- Every screen is closeable mid-action without losing anything important.
- The aesthetic is restraint: Songti SC serif, paper tones, hairline borders, slow fades.

The product thesis is that wellness apps which gamify rest tend to re-create the productivity treadmill they claim to escape. So this one tries hard not to.

## License

MIT.
