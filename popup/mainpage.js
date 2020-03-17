console.log("test");

url = window.location.href;

if (url.includes("://") && url.includes(".")) {
    location.replace("/");
    // If code above does not work, try this:
    if (false) {
        mainpage_url = url.substring(0, url.find("/"));
        location.replace(mainpage_url);
    }
}

