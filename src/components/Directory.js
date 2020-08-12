import React, { Component } from 'react';
import API from "../utils/API"

class Directory extends Component {
    state= {
        results: "",
        search:""
    }

    componentDidMount() {
        API.getEmployees()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      }

    render(){return(
        <table>
            <thead>
            <tr>
                <th>image</th>
                <th>Name </th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            {console.log(this.state.results)}
        </table>
    )}

}

export default Directory;
