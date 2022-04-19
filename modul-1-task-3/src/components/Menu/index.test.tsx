import {render, screen} from "@testing-library/react";

import Main from ".";

test('Should appear', () => {
    render(<Main/>);
    expect(screen.getByTestId("listTrack")).toBeInTheDocument()
})