import React from "react";
import Layout from "../layout";
import "../styles.css"

export default function Home() {
    return (
        <>
            <Layout />
            <div className="about-container">
                <h2>Home</h2>
                <p>
                    My home page
                </p>
            </div>
            <Layout />
        </>
    );
}
