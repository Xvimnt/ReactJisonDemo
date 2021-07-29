import React, { Component } from 'react'
// ---------------------
// Material Components
// ---------------------
import { Grid, Button } from '@material-ui/core';
import { Build } from '@material-ui/icons'
import { environment } from '../../parser/system/environment';

// ---------------------
// Code Mirror
// ---------------------
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

// ---------------------
// Parser
// ---------------------
import { error, error_arr, error_type } from "../../parser/system/error";
const parser = require('../../parser/grammar/main');

export default class editors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            output: "",
        }
    }

    compile = () => {
        try {
            let ast = parser.parse(this.state.input);
            console.log(ast);
            let output_data = ast.execute(new environment(null));
            if(error_arr.length > 0) {
                console.log(error_arr);
                console.log("hubieron errores");
            } else {
                console.log(output_data.value);
                // this.setState({
                //     output: output_data.value
                // })
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Grid container spacing={1} style={{ height: "100%" }} >
                <Grid item md={5} xs={5} lg={5}>
                    <CodeMirror
                        height="600"
                        value={this.state.input}
                        options={{
                            theme: 'monokai',
                            tabSize: 1,
                            lineNumbers: true,
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                        onChange={(editor, data, value) => {
                            this.setState({
                                input: value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={2} xs={2} lg={2}>
                    <Grid container >
                        <Grid item md={2} xs={2}></Grid>
                        <Grid item md={8} xs={8}>
                            <Button startIcon={<Build />} color="primary" variant="contained" onClick={this.compile}> Compile</Button>
                        </Grid>
                        <Grid item md={2} xs={2}></Grid>
                    </Grid>
                </Grid>
                <Grid item md={5} xs={5} lg={5}>
                    <CodeMirror
                        height="500"
                        value={this.state.output}
                        options={{
                            theme: 'monokai',
                            tabSize: 1,
                            keyMap: 'sublime',
                            mode: 'jsx',
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
}

