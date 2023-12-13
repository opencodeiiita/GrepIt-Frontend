# GrepIt-Frontend

Frontend for dynamic trivia platform to compete with you buddies with quizes! Challenge yourself, compete with others, and customize your learning experience.

## 📚 Table Of Contents

- [Features](#🌐-features)
- [Tech Stack](#⚡-tech-stack)
- [Dependencies](#📦-dependencies)
- [How To Setup](#🛠️-how-to-setup)
- [Reference Links](#🔗-reference-links)
- [Directory Structure](#📁-directory-structure)
- [Claim an Issue](#👆-claim-an-issue)
- [Communication](#💻-communication)
- [License](#🛡️-license)
- [Contribution Guidelines](#📋-contribution-guidelines)
- [Mentors](#🤝-mentors)
- [Thanks to all Contributors](#💪-thanks-to-all-contributors)

## 🌐 Features:

-   Engage in multiple-choice questions related to bash commands, HTML tags, JS keywords, and more.
-   Track your progress and compete for a spot on the leaderboard. 
-   Your personal high-score will be recorded, allowing you to monitor your improvement over time.
-   Provides a stress-free and fun learning environment.
-   Helps you enhance your understanding of these topics.

## ⚡ Tech Stack:

-   Node.js (v20.5.0)
-   React.js
-   Material-UI

## 📦 Dependencies:

You need npm/yarn installed in your local machine in order to run this app.

## 🛠️ How To Setup

-   Make sure your machine is having internet connection.
-   Fork the repository.
-   Open shell (which ever your OS support) on your PC.
-   Change drive to the location where you want your project to be copied.
-   Clone it to your local setup by using command `git clone <forked-repo-link>`.
-   Once cloned, Run the following command in the root directory of the project `npm install`.
-   Make sure you have required enviornment variables saved in the `.env` file in the root of the project. A file `.env.example` is attached for reference.
-   After the process is completed, run the command `npm start`.
-   The website will be live on `localhost:7777`.

> [!TIP]
> To change port number for the developement of this project for mac users. Kindly refer to this article:
https://blog.stackademic.com/how-to-change-the-default-port-number-in-react-react-tips-1a957b54759e

```bash
  npm install
  npm start
```


## 🔗 Reference Links:

### 🗺️ Starters

-   [Download and install the latest version of Git.](https://git-scm.com/downloads)
-   [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
-   [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
-   [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)

### 🚀 React

-   [React official Documentation](https://react.dev/learn)
-   [React JS Crash Course](https://youtu.be/w7ejDZ8SWv8?si=wGvhGzbJeEp-Sjv5)
-   [React Hooks Detailed](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

### 🎨 Tailwind CSS

-   [Tailwind Components](https://www.material-tailwind.com/docs/react/collapse)
-   [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
-   [Official Docs](https://tailwindcss.com/docs/installation)
-   [Tailwind CSS Crash Course](https://youtu.be/UBOj6rqRUME?si=iKI5kUFD0WgP4cL7)

### 🎨 Antd

-   [Official Docs](https://ant.design/components/overview)

### Useful Links from Backend

-   [Backend Repo](https://github.com/opencodeiiita/GrepIt-Backend/)
-   [API Documentation](https://github.com/opencodeiiita/GrepIt-Backend/blob/main/API_ENDPOINTS.md)

## 📁 Directory Structure:

```bash
.
├── 🧾 package.json
├── 🧾 package-lock.json
├──  ℹ️  README.md
├── 📁 public
│   ├── 📄 index.html
│   └── 🖼️ favicon.ico
└── 📁 src
    ├── 📁 assets
    │   ├── 📁 images
    │   └── 📁 styles
    │       ├── 📄 index.css
    │       └── 📄 App.css
    ├── 📁 components
    │       └── 📄 WelcomeCard.jsx
    ├── 📁 pages
    │       ├── 📄 CreateRoom.jsx
    │       ├── 📄 Quiz.jsx
    │       └── 📄 Home.jsx
    ├── 📁 services(api)
    ├── 📁 utils
    ├── 📁 hooks
    ├── 📁 routers
    │   └── 📄 AppRouter.jsx
    ├── 📄 App.jsx
    └── 📄 index.js
```

> [!NOTE]
> While adding new files, it is suggested entry here. It will be helpful to new contributors. Make use of chatGPT 😉

## 👆 Claim an issue:

- Comment on the issue. In case of no activity on the issue even after 2 days, the issue will be reassigned. If you have difficulty approaching the issue, feel free to ask on our discord channel.

- Be a champ & don't hesitate if you don't know, just learn on the way and complete it.

- It is also requested to make your entry in [CONTRIBUTORS](CONTRIBUTORS.md) markdown file before submitting the PR.

## 💻 Communication:

Whether you are working on a new feature or facing a doubt please feel free to ask us on our [discord](https://discord.gg/D9999YTkS8) channel. We will be happy to help you out.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📋 Contribution Guidelines:

Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

-   People before code: If any of the following rules are violated, the pull-requests will be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

-   Avoid commiting after opening pull request and name the commit as something meaningful, it is highly recommened to follow.

-   Reference the issue numbers in the commit message if it resolves an open issue. Follow the pattern provided [here](.github/PULL_REQUEST_TEMPLATE.md)

-   Provide relevant screenshot/short video for easier review.

-   Pull Request older than 3 days with no response from the contributor shall be marked closed.

-   Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

-   Be polite: Be polite to other community members.

## 🤝 Mentors

1.  **Bhupesh Dewangan**  
    *Opencode Bot Developer*  
    *The YT demonstrator guy ;-;*  
    `githubID:` [bhupesh98](https://github.com/bhupesh98)  
    `discordID:` bhupesh6726

2. **Vatsal Bhuva**  
    *Just an ordinary guy*  
    `githubID:` [VatsalBhuva11](https://github.com/VatsalBhuva11)  
    `discordID:` vbx11

## 💪 Thanks To All Contributors

All the upcoming contributor's github profile image will be displayed here, pick up the best one real quick.
<img src="https://contrib.rocks/image?repo=opencodeiiita/GrepIt-Backend"/>