const container = document.getElementById('container');

function createLabel(tagName: string, content: string);

function createLabel(tagName: string, idName: string, content: string) {
    const newTag = document.createElement(tagName);

    newTag.id = 'my-label';
    newTag.innerText = 'Hello World';

    if (container)
        container.appendChild(newTag);
}

function createLabel(tagName: string, idName: string, className: string, content: string) {
    const newTag = document.createElement(tagName);

    newTag.id = 'my-label';
    newTag.innerText = 'Hello World';

    if (container)
        container.appendChild(newTag);
}
