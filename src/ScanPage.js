import React, { useEffect, useRef, useState } from 'react';
import {
    Page,
    Button,
    Toast,
    Notification
} from 'konsta/react';
import { BrowserQRCodeReader } from '@zxing/library';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from "react-router-dom";


const ScanPage = ({ userData }) => {
    const videoRef = useRef(null);
    const { token, login, logout } = useAuth();
    const [toastLeftOpened, setToastLeftOpened] = useState(false);
    const [notificationFull, setNotificationFull] = useState(false);
    // const history = useHistory();

    const openToast = (setter) => {
        // close other toast
        setToastLeftOpened(false);

        setter(true);
    };

    const openNotification = (setter) => {
        setNotificationFull(false);

        setter(true);
        // wait for 2 seconds
        setTimeout(() => {
            window.location.href = '/';
        }, 2100);
    };

    useEffect(() => {
        let timer;
        if (notificationFull) {
            timer = setTimeout(() => {
                setNotificationFull(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [notificationFull]);


    useEffect(() => {
        const codeReader = new BrowserQRCodeReader();
        codeReader
            .decodeFromVideoDevice(undefined, videoRef.current, (result, err) => {
                if (result) {
                    console.log(result.text);
                    const url = new URL(result.text);
                    // Check if the domain is 'https://mywater-abc.web.app'
                    if (url.origin === 'https://mywater.agency') {
                        // Extract parameters from the query string
                        const lastSegment = url.pathname.split('/').filter(segment => segment !== '').pop();

                        console.log('Domain is correct');
                        console.log('Last segment:', lastSegment);
                        addScannedQrCode({ advertId: lastSegment })
                    } else {

                        alert('Failed to recognize this QR code. Please try again.');
                    }
                    // 
                    // codeReader.reset();
                    // Handle the QR code result as needed
                }
                if (err) {
                    // console.error(err);
                    // Handle errors if any
                }
            })
            .catch((err) => {
                // console.error(err);
                // Handle errors if any
            });

        // Cleanup function
        return () => {
            codeReader.reset();
        };
    }, []);

    const addScannedQrCode = async ({ advertId }) => {

        try {
            const postData = {
                user_id: userData.uid,
                advert_id: advertId,
            };

            const response = await axios.post(`https://api.mywater.agency/application/record_label_scan`, postData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data);
            // Handle the response as needed

            if (response.data.status == 201) {
                openNotification(setNotificationFull)

            } else {
                openToast(setToastLeftOpened);
            }

        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    return (
        <Page>
            <div className="block-strong inset space-y-4">
                <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%' }} />

            </div>
            <Notification
                opened={notificationFull}
                // icon={<DemoIcon />}
                title="MyWater"
                titleRightText="now"
                subtitle="Qr Code Scanned"
                text="You have successfully scanned this code!"
            />
            <Toast
                position="left"
                opened={toastLeftOpened}
                button={
                    <Button
                        rounded
                        clear
                        small
                        inline
                        onClick={() => {
                            window.location.href = '/';
                            setToastLeftOpened(false);
                        }}
                    >
                        Close
                    </Button>
                }
            >
                <div className="shrink">You have scanned this code already!</div>
            </Toast>


        </Page>


    );
};

export default ScanPage;