import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export function SwiperFunction() {
  new Swiper(".swiper", {
    loop: true,
    modules: [Navigation, Pagination],
    slidesPerView: "4",
    spaceBetween: "24px",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return;
}
