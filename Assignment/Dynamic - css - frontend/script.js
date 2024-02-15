// javascript code goes here
function changeColor() {
    var colorInput = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = colorInput;
}

let aa=document.getElementById("fontsize").value;
document.getElementById('text-container').style.fontSize=aa + 'px';

function changeFontSize(size) {
    document.getElementById('text-container').style.fontSize = size + 'px';
}

function toggleStyle(style) {
    var textContainer = document.getElementById('text-container');
    var currentStyles = textContainer.style.fontWeight + ' ' + textContainer.style.fontStyle + ' ' + textContainer.style.textDecoration;

    switch (style) {
        case 'underline':
            textContainer.style.textDecoration = (currentStyles.includes('underline') ? 'none' : 'underline');
            break;
        case 'italic':
            textContainer.style.fontStyle = (currentStyles.includes('italic') ? 'normal' : 'italic');
            break;
        case 'bold':
            textContainer.style.fontWeight = (currentStyles.includes('bold') ? 'normal' : 'bold');
            break;
    }
}

function changeFontFamily() {
    var fontSelection = document.getElementById('list');
    var selectedFont = fontSelection.options[fontSelection.selectedIndex].value;
    document.getElementById('text-container').style.fontFamily = selectedFont;
}

function getCSSProperties() {
    var textContainer = document.getElementById('text-container');
    var cssPropsParagraph = document.getElementById('css-props');

    var cssProperties = {
        'color': textContainer.style.color,
        'font-size': textContainer.style.fontSize,
        'text-decoration': textContainer.style.textDecoration,
        'font-style': textContainer.style.fontStyle,
        'font-weight': textContainer.style.fontWeight,
        'font-family': textContainer.style.fontFamily
    };

    var cssPropertiesString = Object.entries(cssProperties).map(([property, value]) => `${property}: ${value};`).join(' ');
    cssPropsParagraph.textContent = cssPropertiesString;
}