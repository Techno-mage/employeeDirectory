import React, { Component } from 'react';
import API from "../utils/API";
import Entry from "./Entry";

class Directory extends Component {
    state = {
        results: [],
        search: "",
        display: []
    }

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ results: res.data.results, display: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value,
            display: this.state.results.filter((e)=>{
                var f = e.name.first
                var l = e.name.last
                var name =  f+ " " +l;
                var q = value
                return name.startsWith(q) || f.startsWith(q) || l.startsWith(q)
            })
        });

        this.setState({
            
        })

        console.log(this.state.display)



        
    };

    displayEntries() {
        // if(this.state.results[0]) return <Entry 
        //     image={this.state.results[0].picture.medium} 
        //     name={this.state.results[0].name.first +" " + this.state.results[0].name.last} 
        //     email={this.state.results[0].email} 
        //     phone={this.state.results[0].phone} 
        //     /> 


        this.state.results.map((item) => (
            <Entry
                image={item.picture.medium}
                name={item.name.first + " " + item.name.last}
                email={item.email}
                phone={item.phone}
            />
        ))
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                    type="text"
                    
                />
                <table>
                    {console.log(this.state.search)}
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name </th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>

        
            </thead>

                    {
                    
                    this.state.display.map((item) => (
                        <Entry
                            image={item.picture.medium}
                            name={item.name.first + " " + item.name.last}
                            email={item.email}
                            phone={item.phone}
                        />))}

                </table>
            </div>
        )
    }

}

export default Directory;
