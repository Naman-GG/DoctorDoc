const uploadArea = document.getElementById('upload-area');
const fileUpload = document.getElementById('file-upload');
const fileNameDisplay = document.getElementById('file-name');
const generateBtn = document.getElementById('generate-btn');
const output = document.getElementById('output');

// Open file selector on click
uploadArea.addEventListener('click', () => {
  fileUpload.click();
});

// Handle file selection
fileUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    fileNameDisplay.style.display = 'flex';
    fileNameDisplay.textContent = '✅ File uploaded: ' + file.name;
  }
});

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  uploadArea.addEventListener(eventName, (e) => e.preventDefault());
  document.body.addEventListener(eventName, (e) => e.preventDefault());
});

// Highlight on drag over
uploadArea.addEventListener('dragover', () => {
  uploadArea.classList.add('hover');
});

// Remove highlight on drag leave
uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('hover');
});

// Handle file drop
uploadArea.addEventListener('drop', (e) => {
  const file = e.dataTransfer.files[0];
  if (file) {
    fileUpload.files = e.dataTransfer.files;
    fileNameDisplay.style.display = 'flex';
    fileNameDisplay.textContent = '✅ File uploaded: ' + file.name;
  }
  uploadArea.classList.remove('hover');
});

// Generate button — no PDF content display anymore
generateBtn.addEventListener('click', () => {
  if (!fileUpload.files.length) {
    alert('Please upload a file first!');
    return;
  }

  const highlightColor = document.getElementById('theme-color').value;
  const skipColor = document.getElementById('secondary-color').value;

  alert('Summary generation would happen here!\n\nSelected colors:\n- Highlight: ' +
    highlightColor + '\n- Skippable: ' + skipColor
  );

  // Clear and hide the output
  output.textContent = '';
  output.style.display = 'none';
});
