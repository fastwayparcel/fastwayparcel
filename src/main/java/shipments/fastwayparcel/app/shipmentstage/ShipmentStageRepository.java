package shipments.fastwayparcel.app.shipmentstage;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShipmentStageRepository extends CrudRepository<ShipmentStage, Integer> {

}