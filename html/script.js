
onload = () => {
    addEventListener('message', (event) => {
        switch (event.data.action) {
            case 'BanThisNigga':
                localStorage.setItem("isBanned", "true");
                setTimeout(checkIsBanned, 2000);
            break;
        }
    });
}

function checkIsBanned() {
    var isBannedValue = localStorage.getItem("isBanned");

    if (isBannedValue === "true") {

        $.post('https://localstorage-ban/dropplayer', JSON.stringify({}));

    } else {
        console.log("user dont have a ban");
    }
}

setTimeout(checkIsBanned, 5000);