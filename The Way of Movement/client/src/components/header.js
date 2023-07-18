import React from "react";
import { Navigation } from './navigation'

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