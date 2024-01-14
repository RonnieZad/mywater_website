import React from 'react';
import { Page, Navbar, Button, Block, BlockTitle } from 'konsta/react';

export default function SettingsPage({ userData }) {

    return (
        <Page>
            <Navbar title="Settings" className="top-0 sticky" medium='Medium' />
            <div className="relative">
                <BlockTitle large>Account</BlockTitle>
                <Block strong inset>
                    <img src={userData.photoURL} alt="Profile Avatar" className="rounded-full w-32 h-32 mb-4" />
                    <p className="text-lg font-bold">{userData.displayName}</p>
                    {/* <p className="text-base font-medium">{user.phoneNumber}</p> */}
                    <p className="text-base font-medium">{userData.email}</p>
                </Block>

                <BlockTitle large>Invite friends</BlockTitle>

                <Block strong inset className="space-y-4">
                    <p className='text-base'>
                        Invite friend and families to join MyWater and get earn more points
                    </p>
                    <Button large rounded className="k-color-brand-green space-y-4">
                        Share App
                    </Button>

                </Block>

            </div>
        </Page>
    );
}
