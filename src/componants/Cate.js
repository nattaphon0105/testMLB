import { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Person from './Person';

var groupBy = require('json-groupby')
class genCate extends Component {
    constructor(props) {
        super(props);
        this.state = { cate: "" }
    }
    componentDidMount() {
        console.log('this.props.cate')
        axios.get("http://localhost:3001/data").then(res => {
            var dataGender = groupBy(res.data, ['gender']);
            var dataCountry = groupBy(res.data, ['country']);
            const allCate = [];
            $.each(dataGender, function( index, value ) {
                allCate.push(
                    {
                        'catelist':  {'type': 'gender','value': index}
                    }
                );
            });
            $.each(dataCountry, function( index, value ) {
                allCate.push(
                    {
                        'catelist':  {'type': 'country','value': index}
                    }
                );
            });
            { this.setState({ cate: allCate }) }
            console.log(allCate);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="cate-box">
                   <ShowCate cate={this.state.cate}/>
                </div>
            </div>
        );
    }
}
class Cate extends Component {
    render() {
        return (
            <div data-type={this.props.typename}  data-value={this.props.catename} className="item">{this.props.catename}</div>
        )
    }
}
class ShowCate extends Component {
    render() {
        return (
            this.props.cate &&
            this.props.cate.map(cate => (
                <Cate typename={cate.catelist.type} catename={cate.catelist.value}/>
            ))
        )
    }
}
export default genCate;