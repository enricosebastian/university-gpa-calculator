import React from 'react';
import Checkbox from './Checkbox';

class Checkboxes extends React.Component {
    render() {
        let checkboxes = this.props.terms.map(t => <Checkbox key={t.termNumber} term={t} changeIsChecked={this.props.changeIsChecked}/>);
        return checkboxes;
    }

}

export default Checkboxes;