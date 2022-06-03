This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Architecture design

This section is going to show a curated list of the packages and tools used for this project (to see
the full list of dependencies take a look at `package.json`)

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Testing Library](https://testing-library.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://github.com/axios/axios)
- [Git](https://git-scm.com/)

## Approach

Starting the web application will load all the movies from the database. Later, if you want to search for movies, the input will start searching after you type more than two characters.

There is the option to remove the search with a clear button within the input. this will get all the movies back. Also, if you delete all the search text, all the movies will be reloaded.

Every time you enter a word, a request will be executed to find the matches.

- Add Meta tags to the project (SEO)
- Work with redux using Redux Toolkit
- Persist the store using redux-persist
- Styling template
  - Working with material-ui
- Unit Testing & End to end testing

# Start project

## Install project dependencies

```
$ yarn install
```

## Start the project

```
$ yarn dev
```

This command will start a dev server and every change that is made to the code is reflected on the
browser, that is running the code.

By default it will start the server port 3001, if you need to start the server on a different port
use the following command instead.

```
$ yarn dev -- -p [PORT]
```

Where [PORT] is the port that you want to use for running the server

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.


## Run unit tests

To run the test you can run the following command

```
$ yarn test
```

To know the test coverage the following command could be run

```
$ yarn test --coverage
```
