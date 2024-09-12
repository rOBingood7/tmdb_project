import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { getData } from "../../lib/http.request";
import { reload } from "../../lib/utills";

Header();
const id = location.search.split("=").at(-1);
const res = await getData(`/movie/${id}`);
MovieCard(res);
