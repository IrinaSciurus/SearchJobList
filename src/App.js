import React from 'react';

import Header from "./components/Header";
import JobsList from "./components/JobsList";
import FilterJobs from "./components/FilterJobs";


function App() {

    return (
        <div className="container">
            <div className="content">
                <div>
                    <Header/>
                    <FilterJobs/>
                    <JobsList/>
                </div>
            </div>
        </div>
    );
}

export default App;
