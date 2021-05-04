import * as React from "react";
import { BinTreeNode } from "../models/BinTreeNode";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Alert from '@material-ui/lab/Alert';

import "./Body.scss";
import "./TreeJSONVisualizer.scss";

var Validator = require('jsonschema').Validator;

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
        
        let isValid = true;
        if(this.props.treeNode?.id != 'root') {

            this.state = {
                prettyJsonTree: JSON.stringify(this.props.treeNode, undefined, 4) 
            }            
        }

        /*
        if(this.state.prettyJsonTree !== '') {
            
            let binTreeSchema = {
                "id": "/Tree",
                "type": "object",
                "properties": {
                    "id": { "type" : [ "number" , "string" ] },
                    "left": { 
                        "oneOf": [
                            { "type" : "null" },
                            { "$ref" : "/Tree" }
                        ]
                    },
                    "right": { 
                        "oneOf": [
                            { "type" : "null" },
                            { "$ref" : "/Tree" }
                        ]
                    }
                },
                "required": [
                    "id"
                ],
                "dependencies": {
                    "left": ["id", "right"],
                    "right": ["id", "left"]
                }
            };
        
            let validatorUtility =  new Validator();
            validatorUtility.addSchema(binTreeSchema, '/Tree');

            // pending to validate
            let cleanJSON = JSON.parse(this.state.prettyJsonTree);
            
            let res = validatorUtility.validate(cleanJSON, binTreeSchema);
            isValid = res.valid;

           
        }
        */

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

                    {
                        !isValid && 
                        <Alert severity="error">
                            Please check the format of the binary tree[id: string | number, left: null | [id : string| number, ...], right: null | [id: string| number, ...]]
                        </Alert>
                    
                    }

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