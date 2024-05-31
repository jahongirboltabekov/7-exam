import React, {  useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import './Single.scss'
import { MdOutlineStar} from "react-icons/md";
import Radio from "@mui/material/Radio";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useUpdateProductQuery } from '../../context/ProductApi/index';
import { useGetProductsQuery } from '../../context/ProductApi/index';
import { toggleHeart } from '../../context/Heart'; 
import { addToCart } from '../../context/Card';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";



function Single() {
    const dispatch = useDispatch()
    let wishlist = useSelector(state => state.heart.value)
    const{data:data_swiper} = useGetProductsQuery()
    const {id} = useParams()
    const {data} = useUpdateProductQuery(id)

    const {pathname} = useLocation()

    const[count,setcount] = useState(1)


    useEffect(() =>{
        if(pathname.includes){
            window.scrollTo(0,0)
        }
    })

    const Plus = () =>{
        return setcount(count+1)
    }

    const Minus = () => {
        if(count>1){
        return setcount(count-1)
        }
        else if(count==1){
        return count
        }
    }

    let swiper_products = data_swiper?.map((el) => 
        <SwiperSlide className='' key={el.id}>
            <div className="swiper_card" >
                <NavLink to={`/products/${el.id}`}>
                    <img src={el.image} />
                    <div className="stars">
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='emp_star'/>
                    </div>
                    <div className="div_p">
                        <p className='price'>${el.price}</p>
                        <p className="discount"> <span>${((el.price*100)/24).toFixed(0)}</span></p>
                    </div>
                </NavLink>            
            </div>
        </SwiperSlide>


    )

    let products2 = data_swiper?.slice(0,4)?.map((el) =>
        <div className="best_card" key={el.id}>
            <div className="best_img">
                <img src={el.image} alt="" />
                <div className="hover_div">
                <div className="icons_hover">
                <div onClick={() => dispatch(toggleHeart(el))} className="img">
                        {
                            wishlist?.some(item => item.id === el.id)
                            ?
                            <FaHeart />
                            :
                            <FiHeart />
                        }
                    </div>
                    <div onClick={() => dispatch(addToCart(el))} className="img">
                        <PiShoppingCartBold />
                    </div>
                </div>
            </div>
            </div>

            <NavLink to={`/products/${el.id}`}>
                <div className="about">
                        <h3>{el.title.slice(0,20)}</h3>
                    <div className="star">
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='emp_star'/>
                    </div>
                    <div className="div_p">
                        <p className='price'>${el.price}</p>
                        <p className="discount"> <span>${((el.price*100)/24).toFixed(0)}</span> 24% Off</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )

    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

    

  return (
    <div>
        <div className="product_text">
            <div className="container">
                <h3> <span>Home</span> / <span>Hot Deal</span> / {data?.title.slice(0,20)} </h3>
            </div> 
        </div>
        <div className="container">
            <div className="wrapper">
                <div className="product">
                    <div className="in_product">
                        <div className="single_img">
                            <img src={data?.image} alt="" />
                        </div>
                        <div className="about_product">
                            <h2>{data?.title.slice(0,20)}</h2>
                            <div className="rating">
                                <div className="stars">
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='emp_star'/>
                                </div>
                                <p className='rate'>({data?.rating.rate})</p>
                                <p className='count'>Submit a review</p>
                            </div>
                            <div className="line"></div>
                            <div className="div_p">
                                <p className='price'>${data?.price*count}</p>
                                <p className="discount"> <span>${((data?.price*100)/24).toFixed(0)}</span> 24% Off</p>
                            </div>
                            <div className="about_buy">
                                <div className="buy">
                                    <p>Availability:</p>
                                    <p>Category:</p>
                                    <p>Free shipping</p>
                                </div>
                                <div className="buy">
                                    <p>{data?.rating.count} items</p>
                                    <p>{data?.category.toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="change">
                                <div className="change_color">
                                    <p>Select Color:</p>
                                    <div>
                                        <Radio
                                        {...controlProps("a")}
                                        sx={{
                                            color: "red",
                                            "&.Mui-checked": {
                                            color: "red",
                                            },
                                        }}
                                        />
                                        <Radio
                                        {...controlProps("c")}
                                        sx={{
                                            color: "blue",
                                            "&.Mui-checked": {
                                            color: "blue",
                                            },
                                        }}
                                        />
                                        <Radio
                                        {...controlProps("b")}
                                        sx={{
                                            color: "black",
                                            "&.Mui-checked": {
                                            color: "black",
                                            },
                                        }}
                                        />

                                        <Radio
                                        {...controlProps("e")}
                                        sx={{
                                            color: "yellow",
                                            "&.Mui-checked": {
                                            color: "yellow",
                                            },
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="change_size">
                                    <p>Size:</p>
                                    <select name="" id="">
                                        <option value="">2XL</option>
                                        <option value="">XL</option>
                                        <option value="">L</option>
                                        <option value="">M</option>
                                    </select>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="buttons">
                                <div className="PlusMinus">
                                    <button onClick={Minus}>-</button>
                                    <h5>{count}</h5>
                                    <button onClick={Plus}>+</button>
                                </div>
                                <div className="card">
                                    <button><PiShoppingCartBold />Add To Cart</button>
                                    <button><FiHeart /></button>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="social_buttons">
                                <button className='btn_1'><FaFacebookF />Share on Facebook</button>
                                <button className='btn_2'><FaTwitter />Share on Twitter</button>
                            </div>

                        </div>
                    </div>

                    <div className="product_infor">
                        <div className="theme">
                            <h4 className='h4'>Product Infomation</h4>
                            <h3 className='h3'>Reviews <span>0</span></h3>
                            <h3 className='h3'>Another tab</h3>
                        </div>
                        <div className="line"></div>
                        <div className="p_div">
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </div>
                </div>

                <div className="swiper_product">
                    <h4>BEST SELLER</h4>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {swiper_products}
                      
                    </Swiper>
                </div>
            </div>
            <h4>RELATED PRODUCTS</h4>
            <div className="products">
                {products2}
            </div>
        </div>
    </div>
  )
}

export default Single