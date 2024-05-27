import axios from "axios";
import { error, loaded, loading } from "../reducers/doctors.slice";

export async function getData(url, dispatch) {
  dispatch(loading());
  await axios.get(url)
    .then((res) => dispatch(loaded(res.data)))
    .catch((err) => dispatch(error()));
}
