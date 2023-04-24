let shipmentStage = new URLSearchParams(window.location.search).get("stage");


if (shipmentStage == "received") {
  getShipments("received");
  document.getElementById("received-nav").classList.add("left-bar");
} else if (shipmentStage == "dispatched") {
  document.getElementById("dispatched-nav").classList.add("left-bar");
  getShipments("dispatched");
} else if (shipmentStage == "middle-staged") {
  document.getElementById("middled-nav").classList.add("left-bar");
  getShipments("middle staged");
} else if (shipmentStage == "delivered") {
  document.getElementById("delivered-nav").classList.add("left-bar");
  getShipments("delivered");
}

function getShipments(shipmentStage) {
  let shipmentsXhr = new XMLHttpRequest();
  shipmentsXhr.open("GET", `http://127.0.0.1/shipment/stage/${shipmentStage}`, true);
  shipmentsXhr.send();

  shipmentsXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);

      if (response.length > 0) {
        response.forEach(function (shipment, index) {
          document.getElementById("shipments-root").innerHTML += bindShipments(
            index + 1,
            shipment
          );
        });
      }
      setTimeout(function () {
        stopSpinner();
      }, 100);
    }
  };
}

function bindShipments(index, shipment) {
  return `
    <div class="w3-row card w3-padding w3-margin-top">
    <a href="create-shipment.html?shipmentid=${shipment.shipmentId}">
    <div>
    <div>
      <p class="no-margin-2 small bold text-blue">
        Shipment ID: ${shipment.shipmentId}
      </p>
    </div>
    <div class="w3-col s1">
      <p class="small bold" style="margin-top: 12px">${index}</p>
    </div>
    <div class="w3-col s5">
      <div>
        <p class="no-margin-2 small bold">
          From: <span class="text-blue">${shipment.senderName}</span>
        </p>
        <p class="no-margin-2 small bold">
          To: <span class="text-blue">${shipment.receiverName}</span>
        </p>
      </div>
    </div>
    <div class="w3-col s6">
      <div>
        <p class="no-margin-2 small bold w3-right">
          Arrival: <span class="text-blue">${shipment.deliveryDate}</span>
        </p>
        <p class="no-margin-2 small bold w3-right">
          Type:
          <span class="text-blue">${shipment.shipmentMode}</span>
        </p>
      </div>
    </div>
    </div>
    </a>
  </div>
    `;
}

function stopSpinner() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("content").style.display = "block";
}
