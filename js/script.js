function convertImage() {
        const input = document.getElementById('input-image').files[0];
        if (input) {
            const format = document.getElementById('format-select').value;
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob(function(blob) {
                        const url = URL.createObjectURL(blob);
                        const outputImage = document.getElementById('output-image');
                        outputImage.src = url;
                        const downloadLink = document.getElementById('download-link');
                        downloadLink.href = url;
                        downloadLink.style.display = 'inline-block';
                    }, format);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(input);
        } else {
            alert('Please select an image.');
        }
    }
