/* eslint-disable no-undef */

const ajsMock = {
    Meta: {
        'context-path': '/',
        'base-url': process.env.PUBLIC_URL,
    },
};

export const ajs = () => ((window && window.AJS) ? window.AJS.Meta : ajsMock);
