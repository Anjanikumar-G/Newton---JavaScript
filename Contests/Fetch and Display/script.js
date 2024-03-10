async function fetchAndDisplayData() {
  const dataDisplay = document.getElementById("data-display");
  dataDisplay.innerHTML = "Loading...";

  try {
    const busResponse = await fetch(
      "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
    );
    const busData = await busResponse.json();
    const firstBus = busData[0];
    displayData(dataDisplay, formatBusData(firstBus));

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const trainResponse = await fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    );
    const trainData = await trainResponse.json();
    const firstTrain = trainData[0];
    displayData(dataDisplay, formatTrainData(firstTrain));
  } catch (error) {
    displayData(dataDisplay, "Error fetching data. Please try again later.");
  }
}

function displayData(element, data) {
  element.innerHTML = data;
}

function formatBusData(data) {
  return `
        <p>Date: ${data.date}</p>
        <p>Destination: ${data.destination}</p>
        <p>Source: ${data.source}</p>
        <p>Departure Time: ${data.departureTime}</p>
        <p>Arrival Time: ${data.arrivalTime}</p>
        <p>Ticket Price: ${data.ticketPrice}</p>
        <p>Bus Name: ${data.busName}</p>
    `;
}

function formatTrainData(train) {
  return `
        <p>Train Number: ${train["train_number"]}</p>
        <p>Price: ${train.price}</p>
        <p>Kilometers: ${train.kilometers}</p>
        <p>Duration: ${train.duration}</p>
        <p>Departure Date: ${train["departureDate"]}</p>
        <p>Departure Time: ${train["departureTime"]}</p>
        <p>To: ${train.to}</p>
        <p>From: ${train.from}</p>
    `;
}
