import React, {PureComponent} from 'react';
import './Home.css';
class Home extends PureComponent {
    render() {
        return (
            <div id="home">
                <h1>Toudou</h1>
                <p>A simple task manager.</p>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;