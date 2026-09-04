const selectElement = document.getElementById('workshopSelect');

selectElement.addEventListener('change', (event) => {
  const selectedFile = event.target.value;
  if (selectedFile) {
    window.location.href = selectedFile;
  }
});
