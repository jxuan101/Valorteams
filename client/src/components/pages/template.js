import './template.css';
import React from 'react';
import Rankings from './rankings';
import { withRouter } from 'react-router';

import apis from '../../api';

import { findImage, findBackground } from '../helper.js';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            loading: true,
            hasError: false,
        };
    }

    componentDidMount = async () => {
        await apis.getTeamsByMap(this.props.map).then(res => {
            if (res.status === 200) {
                this.setState({
                    teams: res.data.data,
                    loading: false,
                    hasError: false,
                });
            }
        }).catch(e => {
            this.setState({
                hasError: true,
            })
        });
    }

    createList = () => {
        var counter = 1;
        const teams = this.state.teams;
        const listItems = teams.map(item => {
            if (counter === 1) {
                counter += 1;
                return (<div className = "team-card" key = {item._id} style = {
                    { border: '3px rgb(255, 230, 2) solid', }
                }>
                    {item.team.map((agent, index) => {
                        return (<img src = {findImage(agent)} className = "agent-img" alt = {agent} title = {agent} key = {index}/>);
                    })}
                </div>);
            }
            else if (counter === 2) {
                counter += 1;
                return (<div className = "team-card" key = {item._id} style = {
                    { border: '3px rgb(179, 179, 179) solid', }
                }>
                    {item.team.map((agent, index) => {
                        return (<img src = {findImage(agent)} className = "agent-img" alt = {agent} title = {agent} key = {index}/>);
                    })}
                </div>);
            }
            else if (counter === 3) {
                counter += 1;
                return (<div className = "team-card" key = {item._id} style = {
                    { border: '3px rgb(190, 114, 0) solid', }
                }>
                    {item.team.map((agent, index) => {
                        return (<img src = {findImage(agent)} className = "agent-img" alt = {agent} title = {agent} key = {index}/>);
                    })}
                </div>);
            }
            else {
                counter += 1;
                return (<div className = "team-card" key = {item._id} style = {
                    { border: '3px rgb(58, 58, 58) solid', }
                }>
                    {item.team.map((agent, index) => {
                        return (<img src = {findImage(agent)} className = "agent-img" alt = {agent} title = {agent} key = {index}/>);
                    })}
                </div>);
            }
        })

        return listItems;

    }

    render() {
        const { loading, hasError } = this.state;

        if (loading) return null;
        
        if (hasError) {
            return (
                <div className = "error">
                    <b className = "error-text">Unable to access the database. Refresh the page or please try again later.</b>
                </div>
            );
        }
        else {
            return (
                <div className = "full-container">
                    <div className = "bg-img" style = {
                        { 
                            backgroundImage: `url(${findBackground(this.props.map)})`,
                        }
                    }/>
                    <div className = "teams-container">
                        <Rankings/>
                        {this.createList()}
                    </div>
                </div>
            );
        }
    }
};

export default withRouter(Template);