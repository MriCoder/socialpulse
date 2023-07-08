document.addEventListener("DOMContentLoaded", () => {
  const imageUploader = document.getElementById("file-upload");
  const imageLabel = document.querySelector(".image-upload-label span");

  imageUploader.onchange = (e) => {
    imageLabel.textContent = e.target.files[0]
      ? e.target.files[0].name
      : "Choose Image File";
  };
});
