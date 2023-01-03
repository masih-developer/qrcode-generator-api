const wrapper = document.querySelector(".wrapper");
const inputElem = document.querySelector("input");
const generateBtn = document.querySelector(".form button");
const qrCodeImg = document.querySelector(".qr-code img");

let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

const generateQrImg = () => {
    let inputValue = inputElem.value.trim();
    if (inputValue) {
        generateBtn.innerHTML = "Generating QR Code...";
        async function getImg() {
            try {
                let data = await fetch(`${url}${inputValue}`);
                let res = data.url;
                qrCodeImg.setAttribute("src", res);
                wrapper.classList.add("active");
            } catch (err) {
                alert("Could't connect to the server, please try again");
            } finally {
                generateBtn.innerHTML = "Generate QR Code";
            }
        }
        getImg();
    } else {
        alert("Please enter the desired amount correctly");
    }
};

generateBtn.addEventListener("click", generateQrImg);
inputElem.addEventListener("keyup", (e) => (e.key === "Enter" ? generateQrImg() : null));
