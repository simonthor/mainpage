// Go to the '/' url, which is the website's front page.
url = window.location.href;

if (url.includes("://") && url.includes(".")) {
    location.replace("/");
}
