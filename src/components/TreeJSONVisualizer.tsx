import * as React from "react";
import { BinTreeNode } from "../models/BinTreeNode";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import "./Body.scss";
import "./TreeJSONVisualizer.scss";

export interface TreeVisualizerProps {
    treeNode: BinTreeNode | null
}

interface TreeJSONVisualizerState {
    prettyJsonTree: string
}

//export class TreeJSONVisualizer extends React.Component<TreeVisualizerProps, TreeJSONVisualizerState> {
export const TreeJSONVisualizer: React.FunctionComponent<TreeVisualizerProps> = ( { treeNode } ) => {
    
    /*
    constructor(props: TreeVisualizerProps) {
        super(props);
        /*
        if(this.props.treeNode?.id != 'root' ) {
            this.setState({ prettyJsonTree:  });
        }
       
       

        this.state = {
            prettyJsonTree: ''
        }
    }
    */
    /*

(ev) => {
                            this.setState({
                                prettyJsonTree: JSON.stringify(ev.target.value, undefined, 4) 
                            })
                        }
    */
    
    //render() {

        return (
            <Card className="card">
                <CardContent>
                    <Typography variant="h6" className="text" align="left" gutterBottom>
                    Tree text
                    </Typography>

                    <TextareaAutosize
                        rowsMin={10}
                        className="textarea"
                        aria-label="maximum height" 
                        value={ JSON.stringify(treeNode, undefined, 4)  } />
                
                    <Button fullWidth variant="contained" color="primary">
                        Process
                    </Button>
                </CardContent>
            </Card>
        );
    };
