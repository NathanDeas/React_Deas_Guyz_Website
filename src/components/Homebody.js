import React from "react";
import "./Homebody.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homebody () {
    var settings = {
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        };
    return (
        <div className="parent_container">
            <div className="BandPhoto">
            </div>
            {/* <div id="band_name">DEAS-GUYZ</div> */}
            <section id="bandDescription">
                <h2>An Entertaining Mix of Motown, R&B, Blues​ & More...</h2>
                <h2>Perfect for Your Special ​Occasion!</h2>
            </section>
            <section className="testimonial">
                <Slider {...settings}>
                    {t_data.map((d) => (
                        <div className="hello">
                            <p>{d.test}</p>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="about-the-band">
                <h1>About The Band</h1>
                <p>
                    Deas-Guyz features an entertaining mix of Old Motown, Rhythm and Blues, Pop, Rock, Reggae and Dance beats. The range of musical selections includes Motown sounds of the Temptations, 
                    The Drifters, Smokey Robinson and Marvin Gaye, Bob Marley classics to the dance sounds of Pharrell Williams and Montell Jordan.
                </p>
                <p>
                    The band officially formed in January 2000 (as Nu World Beat) and evolved to the tight group now known as Deas-Guyz.  Each member adds a rich and varied musical background to the mix. The artists 
                    bring many years of prior experience performing professionally in other bands, clubs, colleges, various festivals and hundreds of private functions and wedding receptions.
                </p>
                <p>
                    The band performs most Sunday nights at the Jazz Corner in the Village at Wexford in Hilton Head which is open to the public. They often travel to other locations such as Pawley's Island, Newberry,
                    Mount Pleasant and Greenville in South Carolina and have ventured to several hot spots in Georgia as well. Saturdays are generally reserved for private functions including wedding receptions (their specialty), 
                    corporate and Property Owner's parties, festivals and conventions all along the east coast. 
                </p>
                <p>
                    Deas-Guyz have performed in Chicago, Orlando, Las Vegas, New York, Knoxville and several other locations all around the US. The band has also played at many charitable events on Hilton Head to help
                     those in need. Deas-Guyz would be honored to perform at your wedding reception, professional function or special event and are more than willing to travel. Deas-Guyz have their own complete sound and
                      light setup and come prepared to provide hours of quality entertainment. Music will be tailored to your guests or crowd.
                </p>
                <p>
                    Let Deas-Guyz entertain you and your guests with their wide range of musical fare from “oldies” to cutting edge dance beats. Ideal for all ages and perfect for any special occasion!
                </p>
                <p>
                    Please visit "BOOK THE BAND" for booking information.  Thank you for your consideration and we look forward to being a part of your special day!
                </p>
            </section>
          </div>

    );
}
const t_data = [
    {
        test: '"We were beyond pleased, beyond impressed and ​have already discussed booking you for our ​ten-year anniversary party!"'
    },
    {
        test: '"Deas Guyz is by far the best wedding band we have ever heard. We would recommend planning your wedding or party date around getting this band, they are that good."'
    },
    {
        test: '"I wish we had another daughter to marry so we could use you again! Love to you all. You and your band mates are making cherished memories for countless families."'
    },
    {
        test: '“From the moment people arrived in the ballroom until late that night your group kept the party going and the only complaint that I heard was from the Chef who couldn\'t serve his meal because people wouldn\'t get off the dance floor..."​'
    },
]
export default Homebody;