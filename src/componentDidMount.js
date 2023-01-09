import React from 'react';

class myComponent extends React.Component {
    componentDidMount() {
      const apiUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
    }
    render() {
      return <h1>my Component has Mounted, Check the browser 'console' </h1>;
    }
  }
  export default myComponent;