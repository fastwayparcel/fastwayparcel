package shipments.fastwayparcel.app.shipment;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShipmentRepository extends CrudRepository<Shipment, String> {
	public List<Shipment> findByShipmentStageShipmentStage(String shipmentStage);
}