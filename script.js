window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statusText = document.getElementById("statusText");
    const ipAddressText = document.getElementById("ipAddressText");
    const networkStrengthText = document.getElementById("networkStrengthText");

    statusText.textContent = ' status checking...';

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            ipAddressText.textContent = data.ip;
            statusText.textContent = 'Connected';

            const conection = navigator.connection;

            const networkStrength = connection?conection.downlink +'Mbps': 'Unknown';
            networkStrengthText.textContent = networkStrength;

        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
            ipAddressText.textContent = '-'
            networkStrengthText.textContent = '-'
        })

    }else{
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-'
        networkStrengthText.textContent = '-'
    }
}