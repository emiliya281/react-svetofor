import React from 'react';
import '../App.css';
let div = document.getElementsByTagName('div')[0]

class TrafficLight extends React.Component {
    constructor(props) {
        super(props);
        console.log('Hi, Emma');
        let a = this.state.time;
        setInterval(() => {
            this.setState({
                show : false,
                time : a--,
            });
            // if(a < 0){
            //     a = 15;
            // }
        }, 500);
    }

    state = {
        time: 15,
        show: true,
    }


    render() {
        return (
            <>
                <div className={this.state.time < 0 ? 'active' :'conteiner'}>
                    <div className={"block red"}>
                    </div>
                    <div className = {"block yellow"}>
                        <span title = {this.state.time}>{this.state.time--}</span>
                    </div>
                    <div className={"block green"}>
                    </div>
                </div>
                {/* {this.state.show ? <i>OK</i> :  null} */}
            </>
        );
    }
}

export default TrafficLight;
