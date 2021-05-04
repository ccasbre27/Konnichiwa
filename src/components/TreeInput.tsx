import * as React from "react";
import { BinTreeNode } from "../models/BinTreeNode";

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Body.scss"

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode) => void,
    subtitle: string
}

interface TreeInputState {
    treeText: string
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState>{
    constructor(props: TreeInputProps) {
        super(props);
        this.state = {
            treeText: ""
        }
    }

    /**
     * Converts array format binary tree notation to BinTreeNode data structure
     * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
     * @returns TreeNode format
     * */
    parseArrayToTree(arrayFormat: any[]): BinTreeNode {

        let finalTreeNode = { id: arrayFormat[0] } as BinTreeNode;

        if (Array.isArray(arrayFormat[1]) && arrayFormat[1].length > 1) {
            let leftNode: BinTreeNode = this.parseArrayToTree(arrayFormat[1]);
            finalTreeNode.left = leftNode;

        } else if (arrayFormat[1] === null) {
            finalTreeNode.left = null;
        }
        else {
            let leftNode = { id: arrayFormat[1][0] } as BinTreeNode;
            finalTreeNode.left = leftNode;
        }

        if (Array.isArray(arrayFormat[2]) && arrayFormat[2].length > 1) {
            let rightNode: BinTreeNode = this.parseArrayToTree(arrayFormat[2]);
            finalTreeNode.right = rightNode;
        } else if (arrayFormat[2] === null) {
            finalTreeNode.right = null;
        }
        else {
            let rightNode = { id: arrayFormat[2][0] } as BinTreeNode;
            finalTreeNode.right = rightNode;
        }
        return finalTreeNode;
        
    }

    handleConvertArrayToTreeNode = () => {
        let treeArrayFormat: any[] = JSON.parse(this.state.treeText);
        this.props.onChange(this.parseArrayToTree(treeArrayFormat));
    }

    render() {
        return (
            <Card className="card">
                <CardContent>
                    <Typography 
                        variant="h5" 
                        className="text" 
                        align="center" >
                        { this.props.subtitle }
                    </Typography>
                    <TextField 
                        fullWidth 
                        label="Tree source" 
                        variant="outlined" 
                        onChange={(ev) => {
                            this.setState({
                                treeText: ev.target.value
                            }) }}/>
                    <Button 
                        fullWidth 
                        className="button" 
                        variant="contained" 
                        color="primary" 
                        onClick={ this.handleConvertArrayToTreeNode }>
                        Fetch
                    </Button>
                </CardContent>
            </Card>
        )
    }
}