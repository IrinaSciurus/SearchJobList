import React from "react";
function JobsList() {
    const jobTitles = ["Lead React Engineer", "Junior Angular Engineer"];
    const elements = jobTitles.map(jobTitle => (
        <li key={jobTitle}>
            <article className="media job">
                <div className="media-content">
                    <h4>{jobTitle}</h4>
                </div>
            </article>
        </li>
    ));
    return (
        <div>
            <ol>{elements}</ol>
        </div>
    );
}

export default JobsList;