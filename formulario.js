function start() {
    const name = document.getElementById('name').value;
    if (name) {
        alert('Hello, ' + name + '! Welcome.');
    } else {
        alert('Please, write your name.');
    }
}

