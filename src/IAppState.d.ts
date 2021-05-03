import { IObservable, IObservableValue } from "mobx";


interface IAppState {
    title: string;
    bodyMessage: string;
    treeNode: TreeNode;
    
    setState(newState: IAppState)
}