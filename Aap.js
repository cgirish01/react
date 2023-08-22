const parent = React.createElement(
    'div',
    { id: "parent" },
    [React.createElement('h1', { id: 'child' }, 'hello h1 tag'),
     React.createElement('h2', { id: 'child' }, 'hello h2 tag')]);



const heading = React.createElement('h1', { id: "heading" }, 'My First React Code');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);