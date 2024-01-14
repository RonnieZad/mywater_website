import React, { useState, useRef, useEffect } from 'react';
import { Page, Tabbar, TabbarLink, Icon, Block } from 'konsta/react';
import { GearAlt, HouseAlt, Qrcode } from 'framework7-icons/react';
import Home from './Home';
import SettingsPage from './SettingsPage';
import ScanPage from './ScanPage';
import { useAuth } from './contexts/AuthContext';


export default function HomePage({ userData }) {
    const [activeTab, setActiveTab] = useState('tab-1');

    return (

        <Page>
            <Tabbar labels icons className="left-0 bottom-0 fixed">
                <TabbarLink
                    active={activeTab === 'tab-1'}
                    onClick={() => setActiveTab('tab-1')}
                    icon={<Icon material={<HouseAlt className="w-8 h-8" />} />}
                    label="Home"
                />
                <TabbarLink
                    active={activeTab === 'tab-2'}
                    onClick={() => setActiveTab('tab-2')}
                    icon={<Icon material={<Qrcode className="w-8 h-8" />} />}
                    label="Scan"
                />
                <TabbarLink
                    active={activeTab === 'tab-3'}
                    onClick={() => { setActiveTab('tab-3'); }}
                    icon={<Icon material={<GearAlt className="w-8 h-8" />} />}
                    label="Settings"
                />
            </Tabbar>

            {activeTab === 'tab-1' && <Home userData={userData} />}
            {activeTab === 'tab-2' && (
                <ScanPage userData={userData} />

            )}
            {activeTab === 'tab-3' && <SettingsPage userData={userData} />}
        </Page>


    );
}
