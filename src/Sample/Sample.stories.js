import React from "react";
import {Sample} from "./Sample";

// storiesOf("Examples", module).add("Demo", () => <Demo />);


export function Examples(){
    return (
        <Sample />
    );
  };


export default {
    title: 'Sample2',
    parameters: {
        component: Sample,
    },
};
