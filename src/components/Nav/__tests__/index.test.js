import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..'

afterEach(cleanup);

describe('Nav component', () => {
    //First test
    it('renders', () => {
        render(<Nav/>);
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav/>);

        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('insert the emoji into the h2', () => {
        const { getByLabelText } = render(<Nav/>);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('links are visible', () => {
    it('insert text into the links', () => {
        const { getByTestId } = render(<Nav/>);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});