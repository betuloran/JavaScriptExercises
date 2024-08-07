const box = document.getElementById("box");

    // Fare üzerine gelme (mouseenter) olayı
    box.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "blue";
    });

    // Fare üzerinden çıkma (mouseleave) olayı
    box.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "red";
    });

    // Fare tıklama (click) olayı
    box.addEventListener("click", function() {
        alert("Kutuya tıklandı!");
    });

    // Fare sağ tuş tıklama (contextmenu) olayı
    box.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Tarayıcının varsayılan bağlam menüsünü engeller
        alert("Kutuya sağ tıklandı!");
    });

    // Fare hareketi (mousemove) olayı
    box.addEventListener("mousemove", function(event) {
        console.log("Fare konumu: X=" + event.clientX + ", Y=" + event.clientY);
    });