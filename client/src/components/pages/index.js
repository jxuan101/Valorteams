import './index.css';
import React from 'react';
import apis from '../../api';
import valorant from '../../assets/VALORANT.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update_timestamp: {},
            loading: true,
            hasError: false,
        };
    }

    componentDidMount = async () => {
        await apis.getTimestamp().then(res => {
            if (res.status === 200) {
                this.setState({
                    update_timestamp: res.data.data,
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

    generateText(loading, error, update_timestamp) {
        if (loading || error || !update_timestamp[0]) {
            return (
                <b className = "home-text">
                    Unable to get last database update timestamp.
                </b>
            )
        }
        else {
            return (
                <b className = "home-text">
                    Database updated {update_timestamp[0]['update_date']} at {update_timestamp[0]['update_time']} EST.
                </b>
            )
        }
    }

    render () {
        const { update_timestamp, loading, hasError } = this.state;

        return (
            <div className = "full-container" style = {
                { backgroundImage : `url(${valorant})` }
            }>
                <b className = "site-title-text">
                    VALORTEAMS
                </b>
                <b className = "site-info-text">
                    Based on 200 most recent pro matches.
                </b>
                <b className = "update-info">
                    Auto-updates every monday.
                </b>
                {this.generateText(loading, hasError, update_timestamp)}
                <b className = "data-text">
                    Disclaimer: This site uses match data from <a className = "vlr-link" href = "https://www.vlr.gg" target = "_blank" rel = "noreferrer">VLR.gg</a>.
                </b>
            </div>
        );
    }
};

export default Home;