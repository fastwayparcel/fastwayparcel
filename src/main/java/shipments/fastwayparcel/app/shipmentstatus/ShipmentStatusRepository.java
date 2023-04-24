package shipments.fastwayparcel.app.shipmentstatus;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShipmentStatusRepository extends CrudRepository<ShipmentStatus, Integer> {

}
