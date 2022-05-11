import React from 'react';
import { Input } from "antd"

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    this.handleChange = this.handleChange.bind(this);
    this.submitToLocalStorage = this.submitToLocalStorage.bind(this);
    }

    handleChange(e) {
        this.setState({searchValue: e.target.value});
    }

    componentDidMount() {
        this.setState({ searchValue: localStorage.getItem('searchValue') || '' });
    }

    componentWillUnmount() {
        localStorage.setItem('searchValue', this.state.searchValue ? this.state.searchValue : '');
    }

    submitToLocalStorage(e) {
        this.state.searchValue && localStorage.setItem('searchValue', this.state.searchValue);
    }

    render() {
        return(
            <Input.Search
                placeholder='Search'
                value={this.state.searchValue}
                onChange={this.handleChange}
                onSearch={this.submitToLocalStorage}
            />
        )
    }

}
