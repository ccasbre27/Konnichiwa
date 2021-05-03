import * as React from 'react';
import { observer } from "mobx-react";
import { IAppState } from "../../IAppState";
import { useAppStateContext } from '../../AppState';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
    appState?: IAppState
}

@observer
class HeaderRenderer extends React.Component<HeaderProps>{
    render() {
        return (
            <AppBar position="static" className="header">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" align="center">
                    {this.props.appState!.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export const Header: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <HeaderRenderer appState={appState} />
}

export default Header;