'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'images/porto/porto-8.jpg',
    title: 'Arsicon Interior dan Kontraktor Syariah pertama di Indonesia',
    subtitle: 'Arsicon Interior dan Kontraktor Syariah pertama di Indonesia',
    button: 'Diskusi Sekarang',
  },
  {
    id: 2,
    image: 'images/porto/porto-6.jpg',
    title: 'Rancang Interior Impian Anda Bersama Arsicon',
    subtitle: 'Layanan Profesional, Sesuai Prinsip Syariah',
    button: 'Mulai Sekarang',

  },
  {
    id: 3,
    image: 'images/porto/porto-5.jpg',
    title: 'Rancang Interior Impian Anda Bersama Arsicon',
    subtitle: 'Mewujudkan Hunian yang Nyaman dan Elegan',
    button: 'Hubungi Kami',
  },
];

export default function HeroSlider() {
    useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);
  
    return (
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-[600px]"
          speed={1000}
          onSlideChange={() => AOS.refresh()}
            onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = '.swiper-button-prev';
                swiper.params.navigation.nextEl = '.swiper-button-next';
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="p-6 rounded-lg text-white text-center max-w-3xl"
                     data-aos="fade-up">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#030303] transition">
                    {slide.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }