import './pages.css';
import React from 'react';
import Rankings from './rankings';
import { withRouter } from 'react-router';

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
            return (<div className = "team-card" key = {item._id}>
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
                <Rankings/>
                {this.createList()}
            </div>
        );
    }
};

export default withRouter(Template);