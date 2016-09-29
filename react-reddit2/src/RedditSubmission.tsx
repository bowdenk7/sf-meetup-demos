import * as React from "react";
import { Submission } from "./reddit";

let imageStyle = {
    height: "600px"
}

export interface SubmissionProps extends Submission {
    elementPosition: number;
}

export const SubmissionComp = (submission: SubmissionProps) =>
    <div style={{ fontFamily: "sans-serif" }}>
        {submission.elementPosition ? <br /> : ""}
        <span style={{ fontSize: "1.2rem" }}>
            <span>{submission.elementPosition + 1}.</span>
            <a href={submission.url}>{submission.title}</a>
        </span>
        <span> ({submission.domain}) </span>
        <br/>
        <img src={submission.url} style={imageStyle} />
    </div>;