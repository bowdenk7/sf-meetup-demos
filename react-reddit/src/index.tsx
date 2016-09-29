import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApiResponse } from "./reddit";
import { SubmissionComp } from "./RedditSubmission";


function displayReddit() {


    $.ajax({ url: 'https://www.reddit.com/r/aww.json' }).done(response => {
        let submissions = (response as ApiResponse).data.children;
        submissions = submissions.filter(({data}) => /(png|jpg)$/.test(data.url));

        let components = submissions.map((value, index) =>
            <SubmissionComp key={index} elementPosition={index} {...value.data} />
        );
        ReactDOM.render(<div>{components}</div>, document.getElementById("content"));
    })
}

displayReddit();