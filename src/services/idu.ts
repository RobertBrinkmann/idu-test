export default function getData(url: string): Promise<any> {
  // Fetch list data
  return new Promise((resolve, reject) => {
    console.debug("Fetching data...");
    fetch(url)
      .then((response: Response) => {
        console.debug("Parsing data...");
        // Parse the response into JSON
        response
          .json()
          .then((json) => {
            // If it's empty show an error
            if (!json) {
              console.error("Error: Response empty");
              reject("JSON was empty");
            } else {
              console.debug("Success");
              resolve(json);
            }
          })
          .catch((error) => {
            console.error("Error: Failed to parse");
            reject(`Failed to parse: ${error.message}`);
          });
      })
      .catch((error) => {
        console.error("Error: Failed to fetch");
        reject(`Failed to fetch: ${error.message}`);
      });
  });
}
