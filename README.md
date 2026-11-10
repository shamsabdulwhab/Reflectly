# Reflectly

Reflectly is a group reflection tool for students. A team can join a group, write a reflection about their work together, review guided questions, and open a discussion board.

The app is built with React and Vite. React Router moves between the pages. Shared information, such as the uploaded reflections, is kept with `useState` in `App` and passed to the pages that need it through props.

## Pages

| Address | What the student does |
|---|---|
| `/` | Enter a name and a group code, then continue to the writing page. |
| `/write` | Write a reflection, use the guided questions, and upload the text. |
| `/guidance` | Read prompts that help the student think about a team experience. |
| `/board` | See the uploaded reflections together with starter discussion notes. Students can vote on the notes. |
| `/reflection-poc` | A small experiment that saves reflections inside one page. |
| `/test` | A small experiment that compares the text being typed with the text saved on Upload. |

## Passing a reflection to the Discussion Board

The Write page stores the textarea text in `useState`. Upload sends that sentence to `App` through the `onUpload` prop. `App` keeps every uploaded sentence in `textReflections` and passes the same list to the Discussion Board as `savedReflections`.

The list remains while the app is open. Refreshing the browser clears it, because it is not stored in the browser or a database.

## Future improvements

- Save reflections so they remain after a refresh. `localStorage` can keep them in the browser. A database such as Firebase can share them with the rest of the group.
- Store the name and group code from the join page, and check that the group code belongs to a real group.
- Connect the guidance prompts to the text the student is writing, so the answers can be brought back to the Write page.
- Let students vote on an uploaded reflection in the same way they vote on the starter notes.
- Show reflections from every student in the group on one Discussion Board, instead of only the reflections saved in the current browser session.

## Run the app

From the Reflectly folder:

```powershell
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173/`.
