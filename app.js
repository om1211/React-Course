//object is used to give attribute to class like heading, class or like extra attrubute etc.

// {/* create this nested structure
// <div id="parent">
//         <div id="child">
//             <h1>I'm h1 tag</h1>
//             <h2>I'm h2 tag</h1>
//         </div>
//         <div id="child2">
//             <h1>I'm h1 tag</h1>
//             <h2>I'm h2 tag</h1>
//         </div>
//     </div> */}

const parent=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
        ]),
        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")])
    ]);


//const heading=React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello React");
console.log(parent); //this is the object
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);