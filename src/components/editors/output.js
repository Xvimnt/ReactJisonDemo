import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

function Output() {
    const code = 'const b = 0;';

    // ---------------------
    // Html
    // ---------------------
    return (
        <>
            <CodeMirror
                height="500"
                value={code}
                options={{
                    theme: 'monokai',
                    tabSize: 1,
                    keyMap: 'sublime',
                    mode: 'jsx',
                }}
            />
        </>
    );
}

export default Output;
