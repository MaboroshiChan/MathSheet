import React, { Component, Props } from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import ProofComponent from './ProofComponent';
import Proof from './Proof';
import Button from '../Button';
import LaTeXBox from './LaTexBox';

interface ShowBoxProps extends FormulaBoxProps {
    show: string,
    from: string,
    setRoot: (index: number) => void,
}

export default class ShowBox extends Component<ShowBoxProps> {

    state = {
        show: this.props.show,
        from: this.props.from,
        selected: this.props.selected
    }

    setShow(show: string) {
        this.setState({
            show: show
        });
    }

    setFrom(from: string) {
        this.setState({
            from: from
        });
    }

    handleSelection(selected: boolean) {
        this.setState({
            selected: selected
        });
    }

    render() {
        return (
            <div className="Show">
                <div className="HaveFrom">
                    <span className="have">
                        <Button onClick={this.props.addLine.bind(this)(this.props.index, null)}
                            label={'+'} className="Add line" />
                        Show: <LaTeXBox display={true}
                        selected={this.props.selected}
                        inSelection={this.handleSelection.bind(this)}
                        extract={this.setShow.bind(this)}
                        latex_code={this.state.show} /></span>
                    <span className="from">From: <input></input>
                        <Button onClick={() => this.props.deleteLine(this.props.index)}
                            label={'-'} className="Delete line" /></span>
                </div>
            </div>
        )
    }
}