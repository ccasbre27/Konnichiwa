import * as React from "react";
import { BinTreeNode } from "../models/BinTreeNode";

import "./TreeDrawOutput.scss"

export interface TreeDrawOutputProps {
    treeNode: BinTreeNode | null
}

export const TreeDrawOutput: React.FunctionComponent<TreeDrawOutputProps> = (props) => {
    if (!props.treeNode || !props.treeNode.id) {
        return <div className="treeNode"></div>;
    }
    return (
        <div className="treeNode">
            <div className="nodeId">{props.treeNode.id}</div>
            {props.treeNode.left || props.treeNode.right ?
                <div className="nodeChildren">
                    <TreeDrawOutput treeNode={props.treeNode.left} />
                    <TreeDrawOutput treeNode={props.treeNode.right} />
                </div> :
                null}
        </div>
    );
}