import * as React from 'react';
import { IAppState } from "../IAppState";
import { observer } from "mobx-react";
import { TreeInput } from './TreeInput';
import { TreeDrawOutput } from './TreeDrawOutput';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import "./Body.scss"
import { useAppStateContext } from '../AppState';
import { TreeJSONVisualizer } from './TreeJSONVisualizer';

interface BodyProps {
    appState: IAppState
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer((props) => {
    return (
        <Container maxWidth="sm" className="container">
            <TreeInput subtitle={ props.appState!.bodyMessage } onChange={ ( newVal ) => {
                props.appState.setState({
                    ...props.appState,
                    treeNode: newVal
                })
            }} />

            <TreeJSONVisualizer treeNode={ props.appState.treeNode } />

            <Card className="card">
                <CardContent>
                    <Typography variant="h6" className="text" align="left" gutterBottom>
                        Output
                    </Typography>
                    <div className="treeOutput">
                        <TreeDrawOutput treeNode={ props.appState.treeNode } />
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
})

export const Body: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <BodyRenderer appState={appState} />
}

export default Body;