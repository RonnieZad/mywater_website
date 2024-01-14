import React, { useState, useEffect } from 'react';
import {
    Page, Progressbar, Button, Icon, Block, Sheet,

} from 'konsta/react';
import { Paperplane, Forward, ArrowUpRight } from 'framework7-icons/react';
import axios from 'axios';
import { useAuth } from './contexts/AuthContext';

export default function Home({ userData }) {
    const [loading, setLoading] = useState(true);
    const [sheetOpened, setSheetOpened] = useState(false);
    const [shareSheetOpened, setShareSheetOpened] = useState(false);
    const [recentScans, setRecentScans] = useState([]);
    const [scanPoints, setScanPoints] = useState(0);
    const { token } = useAuth();

    useEffect(() => {
        fetchData();

        if (token) {
            setLoading(false);
        }
    }, [token]);

    const fetchData = async () => {

        try {

            const apiEndpoint = `https://api.mywater.agency/application/get_user_label_scan/${userData.uid}`;

            const response = await axios.get(apiEndpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // console.log(response.data);
            if (response.data.status == 200) {
                if (response.data.scans != null) {
                    setRecentScans(response.data.scans);
                    setScanPoints(response.data.total_points);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <Page>
            <div className="bg-primary-blue relative h-96 rounded-b-md">
                <div className="absolute top-0 left-0 p-4">
                    <div className="flex">
                        <a href="#" >
                            <svg width="60" height="60" viewBox="0 0 207 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1186_651" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="207" height="117">
                                    <path d="M0 0H206.938V116.276H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1186_651)">
                                    <path
                                        d="M197.625 92.3112C185.406 104.525 165.688 104.77 153.167 93.0508C151.672 98.0977 148.938 102.723 145.115 106.551C132.641 119.02 112.354 119.02 99.8854 106.551L81.9323 88.5977L93.7604 76.7487L111.719 94.707C117.661 100.65 127.333 100.65 133.276 94.707C136.156 91.8268 137.74 88.0039 137.74 83.931C137.74 80.1185 136.354 76.5247 133.813 73.7227L115.281 55.1914L127.125 43.3268L164.234 80.4675C170.182 86.4102 179.849 86.4102 185.792 80.4675C188.672 77.5872 190.255 73.7591 190.255 69.6862C190.255 65.6133 188.672 61.7904 185.792 58.9102L148.708 21.8268C142.182 15.3008 131.552 15.3008 125.026 21.8268L54.5521 92.3008C48.5104 98.3477 40.474 101.676 31.9323 101.676C23.3906 101.676 15.3594 98.3477 9.31771 92.3112C3.28125 86.2695 -0.046875 78.2331 -0.046875 69.6966C-0.046875 61.1549 3.28125 53.1185 9.31771 47.082L46.401 9.9987C52.9271 3.47266 61.5 0.207031 70.0781 0.207031C78.6563 0.207031 87.2344 3.47266 93.7604 9.9987L103.464 19.7018L113.188 9.9987C119.719 3.47266 128.292 0.207031 136.87 0.207031C145.443 0.207031 154.021 3.47266 160.552 9.9987L197.63 47.082C203.672 53.1185 207 61.1497 207 69.6966C207 78.2383 203.661 86.2695 197.625 92.3112ZM81.9219 21.8372C75.3906 15.306 64.7656 15.306 58.2344 21.8372L21.1563 58.9206C18.276 61.7956 16.6927 65.6237 16.6927 69.6966C16.6927 73.7695 18.2813 77.5925 21.1563 80.4675C24.0365 83.3477 27.8646 84.931 31.9375 84.931C36.0104 84.931 39.8333 83.3477 42.7135 80.4675L58.2552 64.9258L58.1927 64.8633L91.6094 31.5247L81.9219 21.8372Z"
                                        fill="white" />
                                </g>
                            </svg>

                        </a>
                    </div>
                </div>
                <div className="absolute top-2 right-0 p-4">
                    <Icon
                        onClick={() => {
                            if (navigator.share) {
                                navigator
                                    .share({
                                        title: 'web.dev',
                                        text: 'Check out web.dev.',
                                        url: 'https://web.dev/',
                                    })
                                    .then(() => console.log('Successful share'))
                                    .catch((error) => console.log('Error sharing', error));
                            } else {
                                // Fallback for browsers that do not support navigator.share
                                console.log('Web Share API not supported');
                                alert('Sharing is not supported in this browser. Please use a different browser or share manually.');
                                // You can provide a fallback sharing mechanism here
                            }
                        }}
                        ios={<Forward className="w-7 h-7" />}
                        material={<Paperplane className="w-8 h-8" />}
                        className="text-white"
                    />


                </div>
                <div className="flex flex-col items-center justify-end h-full">
                    <span className="text-2xl mb-8 text-white"><b>Hi</b> {userData.displayName}, you've </span>
                    <span className="text-7xl font-bold text-white">{scanPoints}</span>
                    <span className="text-2xl text-white">points</span>
                    <Block className="flex space-x-8 ">
                        <Button large tonal rounded onClick={() => setSheetOpened(true)}>Reedem points</Button>
                    </Block>
                    <Sheet
                        className="pb-safe"
                        opened={sheetOpened}
                        onBackdropClick={() => setSheetOpened(false)}>

                        <div className="left" />
                        <div className="right">
                            {/* <Link toolbar onClick={() => setSheetOpened(false)}>
                                    Close
                                </Link> */}
                        </div>

                        <h2 className="text-3xl font-bold p-4 text-primary-blue">Reedem Points</h2>

                        <p className="text-base p-4">
                            Earn points by scanning QR codes and reedem them for cash
                        </p>
                        <div className=" p-4">
                            <Progressbar progress={0.7} />
                        </div>
                        <Block>

                            <div className="mt-4">
                                <Button raised large onClick={() => setSheetOpened(false)}>Withdraw</Button>
                            </div>
                        </Block>
                    </Sheet>
                    <Sheet
                        className="pb-safe"
                        opened={shareSheetOpened}
                        onBackdropClick={() => setShareSheetOpened(false)}>

                        <div className="left" />
                        <div className="right">
                            {/* <Link toolbar onClick={() => setSheetOpened(false)}>
                                    Close
                                </Link> */}
                        </div>

                        <h2 className="text-2xl font-bold p-4 text-primary-blue">Share My Water</h2>

                        <p className="text-base p-4">
                            Earn points by scanning QR codes and reedem them for cash
                        </p>
                        <div className=" p-4">
                            <Progressbar progress={0.7} />
                        </div>
                        <Block>

                            <div className="mt-4">
                                <Button large onClick={() => setShareSheetOpened(false)}>Withdraw</Button>
                            </div>
                        </Block>
                    </Sheet>
                </div>
            </div>
            <h2 className="text-2xl font-bold p-4 text-primary-blue">Recent Scans</h2>
            <div className="bg-white p-4 overflow-y-auto pb-32 h-2/4">
                <div className="flex flex-col mt-4">

                    {recentScans.map((scan, index) => (
                        <div key={index} className="bg-gray-200 p-6 my-2 rounded-2xl">
                            <div className='flex flex-row items-center'>
                                <img src={scan.company_logo} alt="Company Logo" className="w-15 h-15 mr-4" />
                                <div className="flex flex-col items-start justify-end h-full">
                                    <p className="text-lg font-bold">{scan.company_name}</p>
                                    <p className="text-m text-gray-500">Scan Date: {new Date(scan.scan_date).toLocaleDateString()}</p>
                                    <p className="text-m text-gray-500">Promotion: {scan.promotion_text}</p>
                                </div>
                                <div className='ml-auto'>
                                    <Icon onClick={() => setShareSheetOpened(true)} material={<ArrowUpRight className="w-7 h-7" />} />
                                </div>
                            </div>
                        </div>
                    ))}



                    {recentScans.length === 0 && <div className="flex flex-col mt-32 items-center justify-center h-full">
                        <p className="text-2xl font-bold">No recent scans</p>
                        <p className="text-lg text-gray-500">Scan a QR code to get started</p>
                    </div>}




                </div>
            </div>
        </Page>
    );
};