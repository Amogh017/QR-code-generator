function generateQR() {
  const input = document.getElementById("qr-input").value.trim();
  const resultDiv = document.getElementById("qr-result");
  resultDiv.innerHTML = "";

  if (!input) {
    alert("Please enter some text or a URL!");
    return;
  }

  QRCode.toCanvas(input, { width: 200, margin: 2 }, function (err, canvas) {
    if (err) {
      alert("Failed to generate QR code.");
      console.error(err);
      return;
    }
    resultDiv.appendChild(canvas);
  });
}
