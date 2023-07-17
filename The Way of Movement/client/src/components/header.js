import React from "react";
import { Navigation } from './navigation'
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>

export function Header() {
    return (
        <header>
            <div className = "header">
                <h1>The Way of Movement</h1>
            </div>
            <Navigation />
        </header>
    );
}