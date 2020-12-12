import React, { useState, useEffect } from "react";
import "./App.css";
import TableData from "./Table";
import Pagination from "./Pagination";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // number of  post we want is 5 perpage

  // check this video out : https://www.youtube.com/watch?v=FiGmAI5e91M
  // and also for pagination: https://www.youtube.com/watch?v=IYCa1F-OWmk

  // // when the  app component load then show us the country data onloads...
  useEffect(() => {
    const getCountriesData = async () => {
      setIsLoading(true); // we are in process of fetching...
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          //console.log("data", data);
          // const countries = data.map((country) => ({
          //   name: country.country,
          //   cases: country.cases,
          //   deaths: country.deaths,
          //   id: country.countryInfo,
          // }));

          console.log("countries data", data);
          setCountriesData(data.slice(0, 25)); // just want to have first 25 records
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getCountriesData();
  }, []);

  const deleteCountryRow = (rowId) => {
    try {
      const countriesDataCopy = { ...countriesData };
      //let countryCopy = countriesDataCopy.filter((row) => row.id !== rowId);
      countriesDataCopy.splice(countriesDataCopy.indexOf(rowId), 1);
      console.log(" countriesDataCopy", countriesDataCopy);
      setCountriesData(countriesDataCopy);
    } catch (err) {
      console.log(err);
      console.log("failed to delete the row", rowId);
    }
  };
  //console.log("setCountriesData", countriesData);

  // For Pagination---> Get Current posts
  const indexOfLastPage = currentPage * postsPerPage; // will give us the index of the last post
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentCountriesData = countriesData.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  //change page
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div className="app">
      <h1>Todo-module with jedi-base example</h1>

      <div className="app__countriesLists">
        {/* {countriesData.map(({ name, cases, deaths }) => (
          <ul>{`Name: ${name}  --- Cases: ${cases} --- Death:${deaths}    `}</ul>
        ))} */}
        <TableData
          countries={currentCountriesData}
          isLoading={isLoading}
          onDelete={deleteCountryRow}
        />

        {/* // we want that data coming from fetch API : countriesData.length */}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={countriesData.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
