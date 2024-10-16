import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

const sentence = "Hello, world!";
function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
console.log(reverseSentence(sentence)); // "World! hello,"

const data = [
    [{ name: 'John' }, { name: 'Doe' }],
    [{ name: 'Jane' }, { name: 'Smith' }],
    [{ name: 'Bob' }, { name: 'Brown' }]
];

const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));
console.log(names); // ['John', 'Doe', 'Jane', 'Smith', 'Bob', 'Brown']
