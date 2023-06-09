package shipments.fastwayparcel.app.shipment;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShipmentController {

	@Autowired
	private ShipmentService shipmentService;

	@CrossOrigin(maxAge = 3600)
	@RequestMapping(method = RequestMethod.POST, value = "/shipment")
	public Shipment addShipment(@RequestBody Shipment shipment) {
		String shipmentId = "FWP" + new Random().nextInt(10000) + "LX";
		shipment.setShipmentId(shipmentId);
		System.out.println(shipmentId);
		return shipmentService.addShipment(shipment);
	}

	@CrossOrigin(maxAge = 3600)
	@RequestMapping("/shipment/{shipmentId}")
	public Optional<Shipment> getShipment(@PathVariable String shipmentId) {
		return shipmentService.getShipment(shipmentId);
	}

	@CrossOrigin(maxAge = 3600)
	@RequestMapping("/shipments")
	public List<Shipment> getShipments() {
		return shipmentService.getShipments();
	}

	@CrossOrigin(maxAge = 3600)
	@RequestMapping("/shipment/stage/{shipmentStage}")
	public List<Shipment> getShipmentByShipmentStage(@PathVariable String shipmentStage) {
		return shipmentService.getShipmentByShipmentStage(shipmentStage);
	}

	@CrossOrigin(maxAge = 3600)
	@RequestMapping(method = RequestMethod.DELETE, value = "/shipment/{shipmentId}/delete")
	public void deleteShipment(@PathVariable String shipmentId) {
		shipmentService.deleteShipment(shipmentId);
	}

	@CrossOrigin(maxAge = 3600)
	@RequestMapping(method = RequestMethod.PUT, value = "/shipment")
	public Shipment updateShipment(@RequestBody Shipment shipment) {
		return shipmentService.addShipment(shipment);
	}

}
