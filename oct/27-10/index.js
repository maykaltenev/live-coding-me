const futureHandler = () => {
    // e.preventDefault();
    fetch("https://app.ticketmaster.com/discovery/v1/events.json?apikey=")
        .then((response) => response.json())
        .then((data) => {
            setFuture((future) => !future);
            setPositionData(data);
        })
        .catch((err) => console.error(err));

};
futureHandler()