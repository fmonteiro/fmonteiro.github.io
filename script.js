const inputElem = document.getElementById('text-input');
const resultElem = document.getElementById('result');
const resultContainerElem = document.getElementById('result-container');

const generateBtn = document.getElementById('generate-button');
const copyBtn = document.getElementById('copy-button');

function getInputValue() {
    return inputElem.value;
}

function getTransformedText() {
    return resultElem.innerText;
}

function setResultContainerVisibility(value) {
    if (value) {
        resultContainerElem.style.display = 'block';
    } else {
        resultContainerElem.style.display = 'none';
    }
}

function generateMock() {
    const text = getInputValue();
    const result = transformText(text);

    resultElem.innerText = `"${result}" :spongebobmock:`;

    setResultContainerVisibility(true);

    console.log(result);
}

function transformText(text) {
    if (!text) {
        return 'Error';
    }

    const chars = [...text].map(char => char.toLocaleUpperCase());

    let result = [];

    chars.forEach((char, i) => {
        if (i % 2 === 0) {
            result.push(char.toLocaleLowerCase());
        } else {
            result.push(char);
        }
    });

    return result.join('');
}

function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = getTransformedText();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

generateBtn.addEventListener('click', generateMock);
copyBtn.addEventListener('click', copyToClipboard);
