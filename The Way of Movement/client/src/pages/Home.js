import React from "react";
import AboutMe from "../components/AboutMe";

import "../styles.css"

export default function Home() {
    return (
        <>
            <div className="homepage">
                <h2>What is The Way of Movement?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum metus ut libero sollicitudin, nec euismod massa finibus. Ut at quam eu nulla congue venenatis. Sed ut consectetur mauris. Nulla facilisi. Aliquam quis luctus arcu. Cras viverra arcu vitae justo cursus dictum. Pellentesque quis sem non mauris sollicitudin luctus. Nullam ac arcu nec mi feugiat vulputate ac a ex. Praesent eget dui a metus feugiat ultricies. Suspendisse non felis ipsum.
                </p>
            </div>
            <div>
                <AboutMe />
            </div>
          </>
    );
}
