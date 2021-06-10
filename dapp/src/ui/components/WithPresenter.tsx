import React from 'react';

export function WithPresenter(Component, createPresenter) {
    return (props) => <Component {...props} createPresenter={createPresenter} />;
}
