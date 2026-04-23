const url = "https://meowfacts.herokuapp.com";

const getFacts = async () => {
    console.log("Fetching data...");
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data[0]); // correct access
};

getFacts();