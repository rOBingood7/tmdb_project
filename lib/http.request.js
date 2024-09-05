import axios from "axios";
const base = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_TOKEN;

export async function getData(path) {
  try {
    const res = await axios.get(base + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
}
