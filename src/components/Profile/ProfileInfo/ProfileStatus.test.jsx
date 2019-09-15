import React from "react";
import { create }  from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Alex-react-app" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Alex-react-app");
    });
    test(`after creation <span> status should be with correct status`, () => {
        const component = create(<ProfileStatus status="Alex-react-app" />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test(`input should be displayed in editMode instead of span`, () => {
        const component = create(<ProfileStatus status="Alex-react-app" />);
        const instance = component.root;
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        let input = instance.findByType("input");
        expect(input.props.value).toBe("Alex-react-app");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Alex-react-app" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
