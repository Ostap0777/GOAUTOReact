import axios from "axios";

export default class PostService {
	static async HomeCars() {
		try {
			const response = await axios.get('https://carhome2024-f2095-default-rtdb.firebaseio.com/cars.json');
			return response.data
		} catch (e) {
			console.log(e)
		}
	}

	static async UsaHome() {
		try {
			const response = await axios.get('https://carhome2024-f2095-default-rtdb.firebaseio.com/carsUsa.json')
			return response.data
		} catch (e) {
			console.log(e)
		}
	}

	static async FavoriteCars() {
		try {
			const response = await axios.get('https://cars-4c324-default-rtdb.firebaseio.com/favoriteCars.json');
			return response.data
		} catch (e) {
			console.log(e)
		}
	}

	static async CarAvailabiliti() {
		try {
			const response = await axios.get('https://cars-cbca7-default-rtdb.firebaseio.com/cars.json');
			return response.data
		} catch (e) {
			console.log(e)
		}
	}

	static async CarsUsa() {
	try {
		const response = await axios.get('https://cars-cbca7-default-rtdb.firebaseio.com/carsUsa.json')
		return response.data
	} catch (e) {
		console.log(e)
	}
	}

	static async AddFavorite(car) {
		try {
			const response = await axios.post('https://cars-4c324-default-rtdb.firebaseio.com/favoriteCars.json', car)
			return response.data
		} catch (e){
			console.log(e)
		}
	}

	static async DeleteFavorite(car) {
		try {
			const response = await axios.delete('https://cars-4c324-default-rtdb.firebaseio.com/favoriteCars.json', car);
			return response.data
		}  catch (e) {
			console.log(e)
		}
	}

	static async CarsId (car) {
		try {
			const response = await axios.get('https://cars-cbca7-default-rtdb.firebaseio.com/cars.json', car);
			return response.data
		} catch (e) {
			console.log(e)
		}
	}
}
