﻿import * as React from 'react';
import { Link } from 'react-router-dom';
import { createOfficeHours } from '../client';
import { LandingComponentProps } from '../types';
import CreateOfficeHoursFormComponent from './CreateOfficeHoursFormComponent';

class LandingComponent extends React.PureComponent<LandingComponentProps> {
    public render: () => JSX.Element = () => {
        return (<div>
            {this.props.officeHours.map(({ id, hostName }) => <Link key={Math.random()} to={`/office-hours/${id}`}>{hostName}</Link>)}
            <CreateOfficeHoursFormComponent createOfficeHours={createOfficeHours} />
        </div>);
    };
};

export default LandingComponent
