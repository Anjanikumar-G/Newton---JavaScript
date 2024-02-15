// javascript code goes here
const blocks = document.querySelectorAll('.block');
const wallIdInput = document.getElementById('wall_id');
const wallColorInput = document.getElementById('wall_color');
const applyBtn = document.getElementById('apply-btn');
const resetBtn = document.getElementById('reset-btn');

applyBtn.addEventListener('click', () => {
    const wallId = parseInt(wallIdInput.value);
    const wallColor = wallColorInput.value;

    // Apply color to the selected wall
    const selectedWall = document.getElementById(wallId.toString());
    if (selectedWall) {
        selectedWall.style.backgroundColor = wallColor;
    }
});


resetBtn.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.backgroundColor = 'transparent';
    });
});