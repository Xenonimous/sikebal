import React, { Component } from 'react';
import axios from 'axios';

var url = 'https://www.bps.go.id/indikator/indikator/download_json/1800/api_pub/50/da_03/1',
export default class GetPenduduk extends Component {

    state = {
        temporary: [],
    }

    async componentDidMount() {
        await axios.get( url, {crossdomain: true},
        )
            .then( response => {
                this.setState({ temporary: response.data.data[13].penduduk_jumlah_penduduk })
            })                                                                                                                                                                                                                                                                                  

        console.log(this.state.temporary)
    }

    render() {
        return (
            <div>
                <h1>Jumlah Penduduk</h1>
                <p id='demo'>{this.state.temporary}</p>
            </div>
        )

    }
}