import React, { Component } from "react";
import videos from "../data/videos";

class LocalFileRead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div >{videos.map((record, i) => <li key={i}>{record["Similarity Scores"][2]}</li>)}</div>
        
        );
    }
}

export default LocalFileRead;