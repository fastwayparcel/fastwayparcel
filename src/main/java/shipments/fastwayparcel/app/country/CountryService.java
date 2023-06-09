package shipments.fastwayparcel.app.country;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {
	@Autowired
	private CountryRepository countryRepository;
	
	public List<Country> addCountries(List<Country> countries) {
		return (List<Country>) countryRepository.saveAll(countries);
	}
	
	public List<Country> getCountries() {
		return (List<Country>) countryRepository.findAll();
	}

}