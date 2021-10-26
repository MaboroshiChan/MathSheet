import LaTeXBox from "./LaTexBox";
import {connect} from 'react-redux';

const updateTeXBox = (state: string) => {
    return {
        latex_code: state
    }
}

export default connect(updateTeXBox)(LaTeXBox);