import React from "react";
import renderer from 'react-test-renderer';

import Button from "./Button";

describe("Button", () => {
    test("renders the Button component", () => {
        renderer.create(<Button label="Hello world!" />);
    });
});