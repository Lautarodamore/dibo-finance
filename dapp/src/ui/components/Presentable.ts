import React from 'react';

export abstract class Presentable<TPresenter, TProps = any, TState = any> extends React.Component<TProps, TState> {
    protected presenter: TPresenter;

    protected constructor(props: Readonly<TProps> & { createPresenter }) {
        super(props);
        this.presenter = props.createPresenter(this);
    }
}
