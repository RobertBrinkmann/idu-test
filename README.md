This is a [Next.js](https://nextjs.org/) tech test project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions

Create a new React application and push it up to a git repository. Feel free to use any CLI tools to assist in the creation of the React application; your ability to initiate a project is not part of this test. A popular choice is https://create-react-app.dev/

In this React application, create a page (it can be the only page) that does the following:

- Fetches the json data from: [https://gist.githubusercontent.com/mong-idu/cd32bca72c490f3c7f17ab8619b1e16c/raw/236755473b8e2fa7bace2e9f3670e8f82e78c8ee/test.json](https://gist.githubusercontent.com/mong-idu/cd32bca72c490f3c7f17ab8619b1e16c/raw/236755473b8e2fa7bace2e9f3670e8f82e78c8ee/test.json)
- Displays the data in a indented list.
- Display the children of each element of the list and any children of those children. Each with indentation to indicate depth.
- Have each member of the list and their children show/hide their children when clicked.
- Have any children hidden by default.

Do commits as you feel appropriate. Make sure all code is pushed when you finish and is available to be viewed by members of our team.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run Cypress tests:

```bash
npm run cypress
# or
yarn cypress
# or
pnpm cypress
```
