url = window.location.href;

if (url.includes("://") && url.includes(".")) {
    location.replace("/");
}
