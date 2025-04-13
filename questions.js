const uploadArea = document.getElementById("upload-area");
const fileInput = document.getElementById("file-upload");
const fileNameDisplay = document.getElementById("file-name");

uploadArea.addEventListener("click", () => fileInput.click());

uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = "#00ffab";
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.style.borderColor = "rgba(255, 255, 255, 0.1)";
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  showFileName();
});

fileInput.addEventListener("change", showFileName);

function showFileName() {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      fileNameDisplay.innerHTML = `✅ ${file.name}`;
      fileNameDisplay.title = "Click to open";
      fileNameDisplay.onclick = () => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
      };
    } else {
      fileNameDisplay.innerHTML = '';
      fileNameDisplay.onclick = null;
    }
  }
  
