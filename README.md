# Reflectly

Reflectly is a group reflection app for students. It helps students reflect on their teamwork, share their experiences, and discuss how they can improve as a group.

Students can join a group, write their reflections, use guided questions, view reflections on a discussion board, and edit a team agreement.

The application is built using **React, Vite, and React Router**.

## Links

- **Live website:** https://reflectlyl.netlify.app/
- **GitHub:** https://github.com/shamsabdulwhab/Reflectly

## Main Features

**1. Join Group**

Students can enter their name and group code to join a group and continue to the reflection page.

**2. Write Reflection**

Students can write about their teamwork and use guided questions to help them reflect. After writing, they can upload their reflection.

**3. AI Guidance**

This page provides questions to help students think more deeply about their experiences and what they could improve.

**4. Discussion Board**

Students can view uploaded reflections and discussion notes. They can also vote on the notes. The note with the most votes is shown at the bottom.

**5. Bridge**

The arrow on the voted note opens the bridge. Month 3 shows the current agreement. Month 4 and Month 5 take the student back to the home page.

**6. Team Agreement**

Students can read and edit the Month 3 agreement lines, save them, and return to the bridge with **See agreements**.

## How It Works

We used React Router to navigate between the different pages.

For the reflection feature, we used `useState` to manage the text students write.

When a student uploads a reflection, it is sent to `App.jsx` using props. The reflection is then placed inside one of the existing discussion cards.

The agreement lines are also kept in `App.jsx` with `useState`. Students can edit a line, and that change stays while they move between the agreement page and the bridge.

Currently, reflections and agreements are only saved temporarily. If the page is refreshed, they disappear because they are not connected to a database.

## Testing and Experiments

Before implementing the reflection feature in the application, I created two small experiments:

- **Reflection POC:** To understand how to collect, save, and display reflections using `useState`.
- **Test page:** To experiment with the difference between the text students are typing and the text they upload.



## Future Improvements

There are still some features we would like to improve:

- Use Firebase to save reflections and agreements, and share them between group members.
- Keep reflections and agreements available after refreshing the page.
- Connect the group code to a real group.
- Improve the guidance feature to support students while writing.

## How to Run the Project

First, clone the repository and open the project folder.

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Open the local link shown in the terminal, usually `http://localhost:5173/`.