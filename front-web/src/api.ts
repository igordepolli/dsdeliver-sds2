import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const apiUrl = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
    return axios(`${apiUrl}/products`);
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayLoad) {
    return axios.post(`${apiUrl}/orders`, payload);
}