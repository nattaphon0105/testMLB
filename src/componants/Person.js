import { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
function ClickCate() {
    $( ".cate-box .item" ).click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        var cate = [];
        $(".cate-box .item.active").each(function( index, value ) {
            cate.push(
                {
                    'catelist':  {'type': $(this).data('type') ,'value': $(this).data('value')}
                }
            );
        });
        console.log(cate);

    });
}

class genPerson extends Component {
    constructor(props) {
        super(props);
        this.state = { person: "" }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/data").then(res => {
            { this.setState({ person: res.data }) }
            ClickCate();
        });
    }
    render() {
        return (
            <div className="container">
                <div className="person-box">
                    <ShowPerson person={this.state.person}/>
                    <div className='item'>
                        <div className='bg-item'>
                            <div className='img-box'>
                                <img src='http://dummyimage.com/149x100.png/5fa2dd/ffffff'></img>
                            </div>
                            <div className='content'>
                                <div className='name'>Nattaphon</div>
                                <div className='gender'>Male</div>
                                <div className='email'>Nattaphon@mail.com</div>
                                <div className='country'>Thailand</div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-item'>
                            <div className='img-box'>
                                <img src='http://dummyimage.com/149x100.png/5fa2dd/ffffff'></img>
                            </div>
                            <div className='content'>
                                <div className='name'>Nattaphon</div>
                                <div className='gender'>Male</div>
                                <div className='email'>Nattaphon@mail.com</div>
                                <div className='country'>Thailand</div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-item'>
                            <div className='img-box'>
                                <img src='http://dummyimage.com/149x100.png/5fa2dd/ffffff'></img>
                            </div>
                            <div className='content'>
                                <div className='name'>Nattaphon</div>
                                <div className='gender'>Male</div>
                                <div className='email'>Nattaphon@mail.com</div>
                                <div className='country'>Thailand</div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-item'>
                            <div className='img-box'>
                                <img src='http://dummyimage.com/149x100.png/5fa2dd/ffffff'></img>
                            </div>
                            <div className='content'>
                                <div className='name'>Nattaphon</div>
                                <div className='gender'>Male</div>
                                <div className='email'>Nattaphon@mail.com</div>
                                <div className='country'>Thailand</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ItemPerson extends Component {
    render() {
        return (
            <div className='item'>
                <div className='bg-item'>
                    <div className='img-box'>
                        <img src={this.props.personImg}></img>
                    </div>
                    <div className='content'>
                        <div className='name'>{this.props.personFirstName}</div>
                        <div className='gender'>{this.props.personGender}</div>
                        <div className='email'>{this.props.personEmail}</div>
                        <div className='country'>{this.props.personCountry}</div>
                    </div>
                </div>
            </div>
        )
    }
}

class ShowPerson extends Component {
    render() {
        return (
            this.props.person &&
            this.props.person.map(person => (
                <ItemPerson personImg={person.image} personFirstName={person.first_name} personGender={person.gender} personEmail={person.email} personCountry={person.country}/>
            ))
        )
    }
}

export default genPerson;