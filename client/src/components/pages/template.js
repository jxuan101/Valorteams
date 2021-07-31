import './pages.css';
import React from 'react';
import ScrollToTop from './scroll_to_top';

import apis from '../../api';

import findImage from '../helper.js';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            loading: true,
        };
    }

    componentDidMount = async () => {
        await apis.getTeamsByMap(this.props.map).then(res => {
            this.setState({
                teams: res.data.data,
                loading: false,
            });
        });
    }

    createList = () => {
        const teams = this.state.teams;
        const listItems = teams.map(item => {
            return (<div key = {item._id}>
                {item.team.map((agent, index) => {
                    return (<img src = {findImage(agent)} className = "agent-img" alt = {agent} title = {agent} key = {index}/>);
                })}
            </div>);
        })

        return listItems;

    }

    render() {
        const { loading } = this.state;

        if (loading) return null;

        return (
            <div className = "teams-container">
                <ScrollToTop/>
                {this.createList()}
            </div>
        );
    }
};

export default Template;