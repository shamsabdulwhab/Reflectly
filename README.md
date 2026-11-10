# Reflectly

Reflectly is a group reflection app for students. It helps students reflect on their teamwork, share their experiences, and discuss how they can improve as a group.

Students can join a group, write their reflections, use guided questions, and view reflections on a discussion board.

The application is built using **React, Vite, and React Router**.

## Links

- **Live website:** https://splendid-entremet-341234.netlify.app/
- **GitHub:** https://github.com/shamsabdulwhab/Reflectly

## Main Features

**1. Join Group**

Students can enter their name and group code to join a group and continue to the reflection page.

**2. Write Reflection**

Students can write about their teamwork and use guided questions to help them reflect. After writing, they can upload their reflection.

**3. AI Guidance**

This page provides questions to help students think more deeply about their experiences and what they could improve.

**4. Discussion Board**

Students can view uploaded reflections and discussion notes. They can also vote on the existing discussion notes.

## How It Works

We used React Router to navigate between the different pages.

For the reflection feature, we used `useState` to manage the text students write.

When a student uploads a reflection, it is sent to `App.jsx` using props. The reflection is then saved in a state array and passed to the Discussion Board, where it can be displayed.

Currently, reflections are only saved temporarily. If the page is refreshed, the uploaded reflections disappear because they are not connected to a database.

## Testing and Experiments

Before implementing the reflection feature in the application, I created two small experiments:

- **Reflection POC:** To understand how to collect, save, and display reflections using `useState`.
- **Test page:** To experiment with the difference between the text students are typing and the text they upload.



## Future Improvements

There are still some features we would like to improve:

- Use Firebase to save reflections and share them between group members.
- Keep reflections available after refreshing the page.
- Connect the group code to a real group.
- Improve the guidance feature to support students while writing.
- Allow students to vote on uploaded reflections.

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