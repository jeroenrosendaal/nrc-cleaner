const items = [
    '.nmt-layout__sidebar',
    '.sidebar',
    '.lees-ook',
    '.article-context',
    '.selections-bar',
]

for (let i = 0; i < items.length; i++) {

    const selector = items[i];
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.remove();
    });
}
