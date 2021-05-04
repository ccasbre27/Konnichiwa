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

export class TreeJSONVisualizer extends React.Component<TreeVisualizerProps, TreeJSONVisualizerState> {

    constructor(props: TreeVisualizerProps) {
        super(props);   
        
        this.state = {
            prettyJsonTree: ''
        }
        
    }
    
    render() {
        if(this.props.treeNode?.id != 'root' && this.state.prettyJsonTree === '') {
            this.state = {
                prettyJsonTree: JSON.stringify(this.props.treeNode, undefined, 4) 
            }
        }
        return (
            <Card className="card">
                <CardContent>
                    <Typography 
                        variant="h6" 
                        className="text" 
                        align="left" 
                        gutterBottom>
                    Tree text
                    </Typography>

                    <TextareaAutosize
                        rowsMin={10}
                        className="textarea"
                        aria-label="maximum height" 
                        onChange={(ev) => {

                            if(ev.target.value?.length > 0) {
                                this.setState({
                                    prettyJsonTree: ev.target.value
                                }) 
                            }
                        }}
                        value={ this.state.prettyJsonTree } />
                
                    <Button 
                        fullWidth 
                        variant="contained" 
                        color="primary">
                        Process
                    </Button>
                </CardContent>
            </Card>
        );
    };
}