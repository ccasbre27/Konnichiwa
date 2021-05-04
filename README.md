# Konnichiwa こんにちは

Konnichiwa is a project developed in React with Typescript to provide a solution about the assigned problems. It is a Single Page App based on the provided template.

It is important to mention that I do not have so much knowledge with Typescript (C# is my strongest technologie), to be honest this has been the biggest thing I have ever made in Typescript. I have worked a little bit in React but with JS (I know some features about ES6), about Hooks I have used just useState. In addition, I am taking a course on Udemy, I started last month. 

## React items
I am using different items of React for example:
+ Components
+ Hooks (useState)

## Style
I am using SASS


## Problems

### Problem #1
Here you can see my solution (the function is on TreeInput component), basically we will have this format 
``` 
    [id, leftChild, rightChild] 
``` 

![](path/parseArrayFunction.png?raw=true)

### Expected data type

As you can see we use recursivity and we are assuming to have the array in the expected format. I did a research and it took me some time to find we can verify this but we might be in a infinite loop that right now I do not know how to solve it but the solution is to create a tuple. So this tuple might have the following values

| Property Name | Data type |
| ------------- | ------------- |
| id at position 0 | string or number  |
| leftChild at position 1  | string array or number array or null |
| rightChild at position 2  | string array or number array or null  |

It is important to mention that the leftChild and rightChild might have another binary tree and the same for their left and right children.

So the type that I created for this is the following
![](path/bintree_plain_tuple.png?raw=true)


I started to notice that I just could add trees at certain level so I added more options and in the following type I indicate that the left and right child might be of type BinTreePlain to allow having the same format in their right and left children but we would have to add one extra to allow one extra level.

![](path/bintree_plain_tuple_2.png?raw=true)

At the end I decided not to add it at a deepest level but I just wanted to mention it because it took me some hours. TODO: to validate the input.

### Functionality
I take always the first value of the node because it will be the id, at least a node should have the id. After that I verify if the value at position 1 (left node) and 2(right node)
+ Is an array and its lenght is bigger than 1: if so, we should go to the children nodes.
+ Is null: if so, I set the respective node as null.
+ The last scenario is a node with just the key: so we create it and set it as the respective node.

Finally, we return the node.

### Problem #2
I developed this user interface using material ui, the component is TreeDrawOutput. On this UI you can do the following:
1. Enter the array in the format [id, leftNode, rightNode]
2. The tree output will display the entered array in a visual JSON format (to achive this I use JSON.stringify with the replacer as null and the space as 4).

![](path/json_stringify.png?raw=true)

3. The output will draw the tree using squares, to achieve this I am using the proposed classes on SASS and I added the logic that was pending.

![](path/draw_tree_css.png?raw=true)

4. Regarding to point C, I could not make it. I was trying to add the validations and I did it using json schema but it took me some hours to get it and finally is pending the logic to display the error message when there is a typo. I left the logic as commentaries on TreeJSONVisualizer. Basically, with this validator we allow to enter the binary tree. Here some information: I am setting the id as required, the left and right properties might be null or the same typo of the node. If there is a left must be a right and the same for if we specify right there must be a left.

![](path/binTreeSchema.png?raw=true)

### Problem #3
TODO: implement logic, I could not make it. 

So the UI is the following

![](path/index.png?raw=true)

Once you enter an array in the accepted format and click on fetch you will see something like the following output

![](path/index01.png?raw=true)

### Conclusion
Finally, thank you so much for your time :) . I could not finish the entire project but I learned many things. To be honest I had a test that I must finish on weekend and I had a class from a course so there were some hours without coding. I thought it was going to be easier but after starting to work with TS I found many things on the road. As I already mentioned this has been the biggest project I have ever made on Typescript, it was a real challenge because I had to search the syntax and those kind of things. If you are wondering why I chose TS was because I had to implement the BinTreeNode interface and I know that there is a way to define a prototype in JS but I thought that would be easier to go for TS but well. Anyways I learned TS, React with TS and I discovered json schema library. 

Thanks!!

## Libraries

[Ray.so (Screenshots)](https://ray.so/)

[Material UI](https://material-ui.com/)

[Material UI Lab](https://material-ui.com/components/about-the-lab/)

[react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/)





