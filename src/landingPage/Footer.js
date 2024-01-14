import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as Linker } from 'react-router-dom';

// import PrivacyPolicy from './PrivacyPolicy'; // Update the path accordingly


function Footer() {
    return (
        <div className="bg-primary-blue">
            <div className="w-full">
                <div className="container mx-auto w-10/12 py-12">
                    <div className="xl:flex lg:flex md:flex pt-2">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                            <svg width="220" height="74" viewBox="0 0 380 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1223_720" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="74">
                                <path d="M0.760406 0.847656H128.307V73.332H0.760406V0.847656Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1223_720)">
                                <path d="M122.948 58.2891C115.37 65.8672 103.135 66.0182 95.3698 58.7474C94.4427 61.8776 92.7448 64.7474 90.3698 67.1224C82.6354 74.8568 70.0469 74.8568 62.3125 67.1224L51.1771 55.987L58.5156 48.6328L69.6563 59.7734C73.3438 63.4661 79.3385 63.4661 83.026 59.7734C84.8125 57.987 85.7969 55.6172 85.7969 53.0911C85.7969 50.7266 84.9375 48.4974 83.3594 46.7526L71.8646 35.2578L79.2135 27.8984L102.234 50.9401C105.922 54.6276 111.922 54.6276 115.609 50.9401C117.396 49.1536 118.38 46.7786 118.38 44.2526C118.38 41.7266 117.396 39.3516 115.609 37.5651L92.6042 14.5599C88.5521 10.5078 81.9583 10.5078 77.9063 14.5599L43.8594 48.6068L34.1875 58.2839C30.4375 62.0339 25.4531 64.1016 20.151 64.1016C14.8542 64.1016 9.86979 62.0339 6.11979 58.2891C2.375 54.5391 0.3125 49.5547 0.3125 44.2578C0.3125 38.9609 2.375 33.9766 6.11979 30.2266L29.1302 7.22135C33.1771 3.16927 38.5 1.14844 43.8229 1.14844C49.1406 1.14844 54.4635 3.17448 58.5156 7.22135L64.5313 13.2422L70.5625 7.22135C74.6146 3.16927 79.9375 1.14844 85.2552 1.14844C90.5781 1.14844 95.901 3.16927 99.9479 7.22135L122.953 30.2266C126.703 33.9766 128.766 38.9557 128.766 44.2578C128.766 49.5599 126.698 54.5391 122.948 58.2891ZM51.1667 14.5651C47.1146 10.513 40.5208 10.513 36.474 14.5651L13.4635 37.5703C11.6771 39.3568 10.6979 41.7318 10.6979 44.2578C10.6979 46.7839 11.6823 49.1589 13.4688 50.9401C15.2552 52.7266 17.6302 53.7109 20.1563 53.7109C22.6823 53.7109 25.0573 52.7266 26.8438 50.9401L36.4844 41.2995L36.4427 41.2578L57.1771 20.5755L51.1667 14.5651Z" fill="white" />
                            </g>
                            <path d="M182.552 28.3099C180.766 25.7266 177.922 24.0859 173.724 24.0859C171.172 24.0859 169.12 24.9661 167.536 26.1068C166.568 26.8151 165.776 27.6328 165.187 28.3984C165.13 28.3099 165.104 28.2214 165.042 28.1641C163.255 25.612 160.437 24.0859 156.245 24.0859C153.693 24.0859 151.609 25.0547 150.026 26.2578C149.323 26.7839 148.708 27.3724 148.208 27.9557L148.062 27.4557C147.594 25.0234 146.448 24.0547 145.01 24.0547C143.75 24.0547 143.135 24.6693 143.135 25.9349V49.5443C143.135 50.513 143.516 51.3932 144.13 52.0078C144.745 52.6224 145.625 53.0026 146.594 53.0026C147.531 53.0026 148.411 52.6224 149.031 52.0078C149.646 51.3932 150.057 50.513 150.057 49.5443V38.1328C150.057 36.112 150.552 34.263 151.495 32.9401C152.432 31.6224 153.812 30.7995 155.656 30.7995C157.562 30.7995 158.823 31.5911 159.62 32.8828C160.411 34.1745 160.672 35.9922 160.672 38.0755V49.5443C160.672 50.4818 161.052 51.362 161.672 51.9766C162.286 52.5911 163.167 53.0026 164.135 53.0026C165.104 53.0026 165.984 52.5651 166.599 51.9193C167.214 51.2734 167.568 50.4245 167.568 49.5703V37.4297C167.656 35.7005 168.151 34.1172 168.974 32.9401C169.911 31.6224 171.318 30.7995 173.167 30.7995C175.073 30.7995 176.365 31.5911 177.125 32.8828C177.891 34.1745 178.156 35.9922 178.156 38.0755V49.5443C178.156 50.4818 178.562 51.362 179.182 51.9766C179.797 52.5911 180.677 53.0026 181.646 53.0026C182.672 53.0026 183.521 52.5651 184.109 51.9193C184.693 51.2734 185.047 50.4245 185.047 49.5703V38.513C185.047 34.5286 184.312 30.9193 182.552 28.3099Z" fill="white" />
                            <path d="M196.424 53.6237C196.101 54.0039 195.689 54.3268 195.252 54.5299C194.309 54.9987 193.346 55.2956 192.403 55.556C191.934 55.7018 191.523 55.8529 191.143 56.056C190.408 56.4674 189.913 57.082 189.913 58.1654C189.913 60.3945 191.554 61.5977 193.814 61.5716C196.278 61.4831 198.153 60.8372 199.648 59.7539C201.148 58.6654 202.231 57.1133 203.08 55.1445L214.752 28.9258C215.049 28.3112 215.195 27.7227 215.163 27.1966C215.106 26.1393 214.669 25.3789 214.049 24.8216C213.434 24.2643 212.674 23.8789 211.731 23.8789C210.768 23.8789 209.945 24.2018 209.268 24.8477C208.596 25.4935 208.564 25.7852 207.893 27.5195C207.57 28.3997 207.101 29.5977 206.512 31.1237C205.34 34.1758 203.669 38.457 201.554 43.8529L194.632 26.1966C194.252 25.1445 193.492 24.4362 192.58 24.0872C191.674 23.7643 190.643 23.8529 189.794 24.2331C187.919 25.1445 187.476 27.1654 188.299 29.0716L193.111 39.6289L194.898 43.5039C195.455 44.7643 195.981 45.9102 196.424 46.9049C196.861 47.8997 197.247 48.6966 197.538 49.3112C197.804 49.9258 197.95 50.2174 197.95 50.2487L196.424 53.6237Z" fill="white" />
                            <path d="M256.547 51.038C256.812 51.8296 257.484 52.3869 258.219 52.7098C258.953 53.0327 259.833 53.1213 260.562 52.913C261.62 52.7098 262.411 52.064 262.943 51.038L272.266 30.7411C272.5 30.1838 272.766 29.4807 273 28.8348C273.208 28.189 273.323 27.6317 273.323 27.3973C273.411 26.1369 272.677 24.9338 271.417 24.3452C270.505 23.965 269.542 23.8765 268.719 24.1734C267.87 24.465 267.135 25.1109 266.781 25.9598L259.833 42.6473L253.469 25.9338C252.677 24.5223 251.151 23.788 249.656 24.0536C248.51 24.1994 247.542 24.9025 247.104 25.9598L240.531 42.6473L233.786 25.9598C233.349 25.1109 232.615 24.465 231.792 24.1734C230.969 23.8765 230.005 23.965 229.151 24.3452C227.833 24.965 227.187 26.1682 227.276 27.4859C227.51 28.5692 227.891 29.6838 228.391 30.8296L237.365 51.0692C237.979 52.3869 239.156 53.0327 240.443 53.0015C242.088 53.0015 243.641 51.4755 244.463 49.3661L250.24 34.7307L256.547 51.038Z" fill="white" />
                            <path d="M301.537 24.0859C300.099 24.0859 298.953 25.0234 298.484 27.487L298.219 28.2786C296.021 25.7005 292.885 24.0859 288.922 24.0859C284.932 24.0859 281.354 25.7266 278.719 28.3359C276.078 30.9505 274.432 34.5547 274.432 38.5443C274.432 42.5339 276.078 46.1693 278.719 48.7786C281.354 51.3932 284.932 53.0339 288.922 53.0339C292.766 53.0339 295.875 51.5078 298.047 49.0443L298.484 50.7474C298.927 52.1224 299.833 53.0339 301.271 53.0339C302.651 53.0339 303.412 52.2422 303.412 50.8047V25.9609C303.412 24.7005 302.797 24.0859 301.537 24.0859ZM294.26 44.0599C292.912 45.4661 291.037 46.3464 288.922 46.3464C286.813 46.3464 284.932 45.4661 283.583 44.0599C282.234 42.6484 281.417 40.6849 281.417 38.5443C281.417 36.4349 282.234 34.4661 283.583 33.0599C284.932 31.6536 286.813 30.7734 288.922 30.7734C291.037 30.7734 292.912 31.6536 294.26 33.0599C295.609 34.4661 296.432 36.4349 296.432 38.5443C296.432 40.6849 295.609 42.6484 294.26 44.0599Z" fill="white" />
                            <path d="M324.584 25.5508C323.97 24.9674 323.121 24.6133 322.183 24.6133H319.251V18.5404C319.251 17.6029 318.839 16.7227 318.22 16.1081C317.605 15.4935 316.725 15.1133 315.787 15.1133C314.818 15.1133 313.938 15.4935 313.355 16.1081C312.735 16.7227 312.355 17.6029 312.355 18.5404V24.6133H309.568C308.631 24.6133 307.782 24.9674 307.193 25.5508C306.579 26.1706 306.199 27.0195 306.199 27.9883C306.199 28.9258 306.579 29.7487 307.193 30.3633C307.782 30.9779 308.631 31.3581 309.568 31.3581H312.355V49.5456C312.355 50.5143 312.735 51.3945 313.355 52.0091C313.938 52.6237 314.818 53.0039 315.787 53.0039C316.725 53.0039 317.605 52.6237 318.22 52.0091C318.839 51.3945 319.251 50.5143 319.251 49.5456V31.3581H322.183C323.121 31.3581 323.97 30.9779 324.584 30.3633C325.173 29.7487 325.553 28.9258 325.553 27.9883C325.553 27.0195 325.173 26.1706 324.584 25.5508Z" fill="white" />
                            <path d="M340.949 53.0026C343.209 53.0026 345.793 52.4766 347.756 51.5964C349.72 50.7161 351.1 49.4557 351.1 47.9297C351.1 46.612 350.251 45.7005 349.194 45.3203C348.136 44.9401 346.907 44.9661 346.084 45.4349C344.678 46.638 342.855 47.3151 340.98 47.3151C339.017 47.3151 337.256 46.4922 335.933 45.263C334.616 44.0286 333.704 42.3568 333.558 40.5703H352.095C354.558 40.5703 355.47 40.0703 355.47 38.1068C355.47 34.0859 353.886 30.5391 351.303 28.0443C348.725 25.5495 345.173 24.0547 341.183 24.0547C337.199 24.0547 333.532 25.5807 330.834 28.1328C328.136 30.7109 326.464 34.3203 326.464 38.5443C326.464 42.5339 328.105 46.1693 330.746 48.7526C333.386 51.362 336.964 53.0026 340.949 53.0026ZM341.183 29.6849C343.063 29.6849 344.824 30.3932 346.142 31.5651C347.433 32.737 348.345 34.3516 348.491 36.2266H333.501C333.735 34.3516 334.704 32.737 336.084 31.5651C337.459 30.3932 339.277 29.6849 341.183 29.6849Z" fill="white" />
                            <path d="M376.524 24.7891C374.972 24.2318 373.097 24.112 371.716 24.2318C369.81 24.5547 368.107 25.3151 366.701 26.2578C365.617 26.987 364.706 27.8099 364.029 28.5703L363.769 27.4557C363.269 24.9036 362.154 24.0547 360.716 24.0547C359.456 24.0547 358.841 24.6693 358.841 25.9349V49.5443C358.841 50.513 359.222 51.3932 359.836 52.0078C360.451 52.6224 361.331 53.0026 362.3 53.0026C363.237 53.0026 364.117 52.6224 364.737 52.0078C365.352 51.3932 365.763 50.513 365.763 49.5443V37.7839C365.852 36.9922 366.024 36.2266 366.289 35.4922C366.847 34.0547 367.696 32.8828 368.81 32.0651C369.925 31.2422 371.274 30.7734 372.623 30.862C373.3 30.9193 373.946 30.9505 374.591 30.9766C376.201 31.0651 376.935 31.0078 377.789 30.5078C378.607 30.0391 379.253 29.1016 379.253 28.013C379.253 26.3724 378.05 25.3464 376.524 24.7891Z" fill="white" />
                        </svg>


                            </div>
                          

                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            {/* <ul>
                                <li className="text-white font-bold text-xl mb-6">Products</li>
                                <li className="text-base text-slate-100 hover:text-white mb-5">
                                    <Link
                                        activeClass="active"
                                        to="rent-financing"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Rent Financing
                                    </Link>
                                </li>
                                <li className="text-base text-slate-100 hover:text-white mb-5">
                                    <Link
                                        activeClass="active"
                                        to="marketplace"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Market Place
                                    </Link>
                                </li>
                                <li className="text-base text-slate-100 hover:text-white mb-5">
                                    <Link
                                        activeClass="active"
                                        to="roommate"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Roommate
                                    </Link>
                                </li>

                            </ul> */}
                        </div>
                     
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            {/* <ul>
                                <li className="text-white font-bold text-xl mb-6">Legal</li>
                                <li className="text-base text-slate-100 hover:text-white mb-5">
                                    <Linker
                                        activeClass="active"
                                        to="/privacy"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        style={{ cursor: 'pointer' }}>Privacy Policy</Linker>

                                </li>
                              
                            </ul> */}
                        </div>
                    </div>
                    <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                            <p className="text-white text-base">© 2024 MyWater Agency</p>
                            <p className="text-white text-base">All rights reserved | All wrongs reserved.</p>
                        </div>
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                            <ul className="xl:flex lg:flex md:flex sm:flex justify-between">



                            </ul>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                            <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                                {/* <div>
                                    <a href="https://www.linkedin.com/company/enyumba/">
                                        <svg aria-label="Twitter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                    </a>
                                </div> */}
                                {/* <div>
                                    <a href="https://www.linkedin.com/company/enyumba/">
                                        <svg aria-label="Instagram" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;




