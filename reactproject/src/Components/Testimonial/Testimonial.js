// testimonials.js
import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

const TestimonialsData = [
    {
        id: 1,
        name: "Kalai",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Kavitha",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Tamil",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://st4.depositphotos.com/13194036/22902/i/450/depositphotos_229020394-stock-photo-beautiful-female-teacher-formal-wear.jpg",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-wrapper">
                <div className="testimonial-header">
                    <h1>OUR TESTIMONIALS</h1>
                    <p>What Our Clients Say About Us</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {TestimonialsData.map((item) => (
                            <div key={item.id} className="testimonial-card">
                                <div className="testimonial-card-content">
                                    <div className="testimonial-card-header">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="testimonial-img"
                                        />
                                        <div>
                                            <p className="testimonial-name">{item.name}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-card-body">
                                        <p className="testimonial-text">{item.text}</p>
                                        <p className="testimonial-stars">★ ★ ★ ★ ★</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
