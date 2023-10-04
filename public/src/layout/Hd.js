import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

import axios from 'axios'

import hd from '../scss/hd.module.css';
function Hd(props) {
    const [gnb, gnbUpdate] = useState([]);
    const [hamMenu, setHamMenu] = useState(false);
    //스크롤 시 body에 scroll클래스
    const [scrollPosition, setScrollPosition] = useState(false);

    const dataSetting = async () => {
        axios.get('/data', { params: { tablenm: "ongadam_navi" } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        gnbUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }

    // a링크값과 섹션의 링크값 동기화
    let navilinkarr = [];
    props.info.hddb.navi.map((v, i) => {
        navilinkarr.push(v.link)
    })



    const scrollingTop = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos > 10 ? true : false;
        setScrollPosition(visible);

        visible ? document.body.classList.add('scroll') : document.body.classList.remove('scroll')

    }
    const hamMenuAction = (newValue) => {
        setHamMenu(newValue);
        newValue ? document.body.classList.add('hamMenu') : document.body.classList.remove('hamMenu')
    }
    const handleHamMenuEvent = (event) => {
        const newValue = event.detail;
        hamMenuAction(newValue);
    };
    const handleMenuToggle = () => {
        const newHamMenuValue = !hamMenu;
        hamMenuAction(newHamMenuValue);
    }

    useEffect(() => {
        dataSetting();
        window.addEventListener('scroll', scrollingTop);
        window.addEventListener('hamMenu', handleHamMenuEvent);
        return () => {
            window.removeEventListener('scroll', scrollingTop);
            window.removeEventListener('hamMenu', handleHamMenuEvent)
        }
    }, [])













    return (

        <Navbar
            fixed="top"
            expand="lg"
            className={`hd flex-wrap p-0`}
            id={props.id}

        >
            <div id='eventBanner' className={`col-12 ${hd.eventBanner}`}>
                {
                    props.info.hddb.banner.map((v, i) => {
                        return (
                            <Nav.Link href={v.link} target={v.target} className={`${hd.topBanner}`}>
                                <p>
                                    {
                                        v.title.split('|').map((val, idx) => {
                                            return (
                                                <>
                                                    {val}
                                                    {
                                                        idx === 0 && <span className='price ms-1' key={`banner${idx}`}>{v.em}</span>
                                                    }
                                                </>

                                            )
                                        })
                                    }
                                </p>
                            </Nav.Link>
                        )
                    })
                }
            </div>
            <section id={`${hd.headSection}`} className={`col-12`}>
                <Container className={`${hd.mainhead} container d-flex justify-content-between align-items-center`}>
                    <div className={`${hd.sub}`}></div>
                    <h1>
                        <Navbar.Brand href="#home" className={`m-0 p-0 d-block`}>
                            <svg viewBox="0 0 455.52 89.46">
                                <g id="whitelogo">
                                    <g>
                                        <path class="cls-1"
                                            d="M26.27,18.13a24.94,24.94,0,0,1,19.28,8.42,26.21,26.21,0,0,1,7,18.18,26.21,26.21,0,0,1-7.34,18.43q-7.35,7.89-18.89,7.89T7.34,63.16A26.21,26.21,0,0,1,0,44.73,26.14,26.14,0,0,1,7,26.6,24.9,24.9,0,0,1,26.27,18.13Zm0,6.34a18.69,18.69,0,0,0-13.88,6,19.91,19.91,0,0,0-5.8,14.43A20.46,20.46,0,0,0,9.21,55a18.77,18.77,0,0,0,7.15,7.29,19.64,19.64,0,0,0,9.89,2.57,19.66,19.66,0,0,0,9.89-2.57A18.77,18.77,0,0,0,43.29,55a20.46,20.46,0,0,0,2.64-10.17,19.88,19.88,0,0,0-5.82-14.43A18.73,18.73,0,0,0,26.25,24.47Z" />
                                        <path class="cls-1"
                                            d="M64.48,19.43H71v9a26.92,26.92,0,0,1,8.6-7.75,21.15,21.15,0,0,1,10.27-2.57,17.84,17.84,0,0,1,10,2.87,17,17,0,0,1,6.45,7.72q2.08,4.86,2.09,15.13v25.9H101.9v-24q0-8.7-.72-11.61a12.75,12.75,0,0,0-4.32-7.52,13,13,0,0,0-8.32-2.52A16,16,0,0,0,78,28a18.22,18.22,0,0,0-6.13,9.63Q71,41.35,71,51.3V69.75H64.48Z" />
                                        <path class="cls-1"
                                            d="M165.64,19.43h6.48v40.1q0,10.59-1.85,15.5a20.21,20.21,0,0,1-8.84,10.68,29,29,0,0,1-15.12,3.75,34.68,34.68,0,0,1-11.64-1.83,23.46,23.46,0,0,1-8.39-4.92,29.32,29.32,0,0,1-6-9h7a18.59,18.59,0,0,0,7.41,7.41A23.88,23.88,0,0,0,146,83.49,23.2,23.2,0,0,0,157.19,81a15.13,15.13,0,0,0,6.51-6.2q1.94-3.73,1.94-12V60.18a24.59,24.59,0,0,1-8.94,7.1,26.56,26.56,0,0,1-24.26-1A24.48,24.48,0,0,1,123,57a25.25,25.25,0,0,1-3.34-12.81,26.2,26.2,0,0,1,26-26.09,24.09,24.09,0,0,1,10.54,2.34,29.05,29.05,0,0,1,9.42,7.7Zm-19.1,4.95A20.44,20.44,0,0,0,136.31,27a19.28,19.28,0,0,0-7.4,7.35,20.12,20.12,0,0,0-2.68,10.15,18.34,18.34,0,0,0,5.55,13.7q5.55,5.4,14.39,5.41t14.36-5.37Q166,52.91,166,44.17A20.49,20.49,0,0,0,163.47,34,18.24,18.24,0,0,0,156.39,27,19.65,19.65,0,0,0,146.54,24.38Z" />
                                        <path class="cls-1"
                                            d="M236.13,19.43V69.75h-6.38V61.1a27.64,27.64,0,0,1-9.14,7.45,25.5,25.5,0,0,1-29.32-5.25,26,26,0,0,1-7.56-18.85,25.49,25.49,0,0,1,7.63-18.59,24.89,24.89,0,0,1,18.36-7.73,23.75,23.75,0,0,1,11.22,2.64,25.56,25.56,0,0,1,8.81,7.91V19.43Zm-25.88,4.95A19.47,19.47,0,0,0,193,34.5a20.34,20.34,0,0,0,0,20.32,19.86,19.86,0,0,0,7.32,7.56,19.19,19.19,0,0,0,9.87,2.7,20.18,20.18,0,0,0,10.07-2.68,18.76,18.76,0,0,0,7.32-7.25,20.73,20.73,0,0,0,2.57-10.31,20,20,0,0,0-5.76-14.6A19,19,0,0,0,210.25,24.38Z" />
                                        <path class="cls-1"
                                            d="M300.94,0V69.75h-6.39V61.1a27.71,27.71,0,0,1-9.13,7.45,25.52,25.52,0,0,1-29.33-5.25,26,26,0,0,1-7.56-18.85,25.49,25.49,0,0,1,7.63-18.59,24.9,24.9,0,0,1,18.37-7.73,23.68,23.68,0,0,1,11.21,2.64,25.39,25.39,0,0,1,8.81,7.91V0ZM275.06,24.38A19.5,19.5,0,0,0,257.8,34.5a20.4,20.4,0,0,0,0,20.32,19.81,19.81,0,0,0,7.33,7.56,19.13,19.13,0,0,0,9.86,2.7,20.18,20.18,0,0,0,10.07-2.68,18.72,18.72,0,0,0,7.33-7.25A20.72,20.72,0,0,0,295,44.84a20.06,20.06,0,0,0-5.75-14.6A19.07,19.07,0,0,0,275.06,24.38Z" />
                                        <path class="cls-1"
                                            d="M365.74,19.43V69.75h-6.38V61.1a27.74,27.74,0,0,1-9.14,7.45A25.5,25.5,0,0,1,320.9,63.3a26,26,0,0,1-7.57-18.85A25.53,25.53,0,0,1,321,25.86a24.9,24.9,0,0,1,18.37-7.73,23.75,23.75,0,0,1,11.22,2.64,25.56,25.56,0,0,1,8.81,7.91V19.43Zm-25.88,4.95A19.5,19.5,0,0,0,322.6,34.5a20.37,20.37,0,0,0,0,20.32A19.71,19.71,0,0,0,330,62.38a19.13,19.13,0,0,0,9.86,2.7,20.21,20.21,0,0,0,10.08-2.68,18.76,18.76,0,0,0,7.32-7.25,20.72,20.72,0,0,0,2.56-10.31A20,20,0,0,0,354,30.24,19,19,0,0,0,339.86,24.38Z" />
                                        <path class="cls-1"
                                            d="M380.27,19.43h6.47v8.69a25.09,25.09,0,0,1,6.95-7,19.7,19.7,0,0,1,10.32-3A17.13,17.13,0,0,1,411,19.57a14.84,14.84,0,0,1,5.37,3.81,20.3,20.3,0,0,1,3.61,6.82,24,24,0,0,1,8.08-9,19.12,19.12,0,0,1,10.43-3.08,16.35,16.35,0,0,1,9.21,2.64,15.72,15.72,0,0,1,5.92,7.35q1.95,4.72,1.94,14.16V69.75h-6.61V42.28q0-8.1-1.16-11.13a10,10,0,0,0-3.94-4.88,11.8,11.8,0,0,0-6.66-1.85,14.52,14.52,0,0,0-8.6,2.78,16,16,0,0,0-5.69,7.4q-1.8,4.62-1.8,15.45v19.7h-6.47V44q0-9.12-1.14-12.37a10.31,10.31,0,0,0-3.95-5.23,11.45,11.45,0,0,0-6.71-2,14.41,14.41,0,0,0-8.39,2.71,16,16,0,0,0-5.79,7.28q-1.86,4.59-1.87,14V69.75h-6.47Z" />
                                    </g>
                                </g>
                            </svg>
                        </Navbar.Brand>
                    </h1>
                    <Navbar.Toggle aria-controls="navbar-nav" className={`${hd.toggle}`} onClick={handleMenuToggle} />
                    <Navbar.Collapse id="navbar-nav" className={`justify-content-end`}>
                        <Scrollspy
                            items={navilinkarr}
                            currentClassName="active"
                            className={`${hd.menu} d-flex m-0 p-0 align-items-center`}
                            offset={-100}
                        >
                            {
                                gnb.map((v, i) => {
                                    return (
                                        <li key={`nav${i}`} onClick={() => { hamMenuAction(false) }}><Nav.Link href={v.link}  >{v.title}</Nav.Link></li>
                                    )
                                })
                            }
                        </Scrollspy>
                    </Navbar.Collapse>
                </Container>
            </section>
        </Navbar>
        // <header >

        //     <section id={`${hd.headSection}`} className={``}>
        //         <div className={`${hd.mainhead} container d-flex justify-content-between align-items-center`}>
        //           
        //             <nav>
        //                 <ul className={`${hd.menu} d-flex m-0 p-0 align-items-center`}>
        //                     {
        //                         props.info.hddb.navi.map((v, i) => {
        //                             return (
        //                                 <li><a href={v.link}>{v.title}</a></li>
        //                             )
        //                         })
        //                     }
        //                     {
        //                         props.info.hddb.special.map((v, i) => {
        //                             return (
        //                                 <li className={`${hd.eventMenu} px-2 py-1`}><a href={v.link}>{v.title}</a></li>
        //                             )
        //                         })
        //                     }
        //                 </ul>
        //             </nav>
        //             {/* <i className={`${hd.hamMenu} fa-solid fa-bars`}></i> */}
        //         </div>
        //     </section>
        // </header>
    );
}

export default Hd;