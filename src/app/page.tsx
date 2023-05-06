"use client";

import React, { useState, useEffect } from "react";
import List from "@/components/list";
import styles from "@/styles/page.module.scss";

export default function Home() {
  const url: string = `https://gist.githubusercontent.com/mong-idu/cd32bca72c490f3c7f17ab8619b1e16c/raw/236755473b8e2fa7bace2e9f3670e8f82e78c8ee/test.json`;

  const [data, setData] = useState([]);

  fetch(url).then((response: Response) => {
    response.json().then((json) => {
      setData(json);
    });
  });

  return (
    <main className={`${styles.main} container`}>
      <div className={`${styles.description} mb-4`}>
        <h1 className="display-1">Test</h1>
        <h3>Description:</h3>
        <p className="mb-4">
          Create a new React application and push it up to a git repository.
          Feel free to use any CLI tools to assist in the creation of the React
          application; your ability to initiate a project is not part of this
          test. A popular choice is https://create-react-app.dev/
        </p>
        <h5>Instructions:</h5>
        <ul>
          <li>
            Fetches the json data from:
            <a className="ms-1 text-decoration-underline" href={url}>
              {url}
            </a>
          </li>
          <li>Displays the data in a indented list.</li>
          <li>
            Display the children of each element of the list and any children of
            those children. Each with indentation to indicate depth.
          </li>
          <li>
            Have each member of the list and their children show/hide their
            children when clicked.
          </li>
          <li>Have any children hidden by default.</li>
        </ul>
        <p>
          Do commits as you feel appropriate. Make sure all code is pushed when
          you finish and is available to be viewed by members of our team.
        </p>
      </div>
      <List url={url} />
    </main>
  );
}
