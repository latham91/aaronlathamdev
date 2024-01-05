"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const messages = [
    "This page is as lost as socks in a dryer!",
    "Houston, we have a problem! This page seems to have blasted off to a galaxy far, far away.",
    "Oops! Looks like this page is on vacation in the land of nowhere.",
    "This page seems to have taken a spontaneous vacation. Try catching it later!",
    "Looks like this page is doing its best impression of Waldo – it's missing!",
    "This page is playing hide and seek. Spoiler alert: it's winning!",
    "Sorry, this page is MIA (Missing in Algorithm). Maybe it's off on a digital treasure hunt!",
    "Whoopsie daisy! This page seems to be moonwalking in the wrong direction.",
    "This page seems to have wandered off the digital map. Maybe it's searching for its GPS signal!",
    "This page is taking a coffee break. Check back later when it's done sipping pixels!",
];

export default function NotFound() {
    const [notFoundMsg, setNotFoundMsg] = useState(messages[Math.floor(Math.random() * messages.length)]);

    const handleClick = () => {
        setNotFoundMsg(messages[Math.floor(Math.random() * messages.length)]);
    };

    return (
        <div className="grid place-items-center grow">
            <div>
                <h2 className="text-4xl md:text-9xl text-center">404</h2>
                <p className="text-lg text-center">{notFoundMsg}</p>
                <div className="text-center m-10 space-x-3">
                    <Link href="/">
                        <Button>Return Home</Button>
                    </Link>
                    <Button variant="outline" onClick={handleClick}>
                        Random Message
                    </Button>
                </div>
            </div>
        </div>
    );
}
