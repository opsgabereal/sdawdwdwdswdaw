// public/script.js
async function loadURL() {
    const url = document.getElementById("url").value;
    try {
        const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
        const data = await response.text();
        document.getElementById("proxyFrame").srcdoc = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
