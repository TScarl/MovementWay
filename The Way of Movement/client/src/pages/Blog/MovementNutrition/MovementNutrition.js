import React from 'react';
import Construction from '../../../components/Construction';
import { OnThisPage } from '../../../components/OnThisPage';
import { BlogArchive } from '../../../components/BlogArchive';


export default function MovementNutrition() {
    const activePostTitle = "Movement as Nutrition";
    const sections = [
        { id: '1', title: '1' },
        { id: '2', title: "2" },
        { id: '3', title: '3' },
    ];
    return (
        <div className="blog-container">
            <main className="blog-content">
                <BlogArchive activePostId={activePostTitle} />
                <Construction />
                <h3 id="1">Hello</h3>
                <p>
                    We are still in construction!
                </p>
                <h3 id="2">Hello</h3>
                <p>
                    We are still in construction!
                </p>
                <h3 id="3">Hello</h3>
                <p>
                    We are still in construction!
                </p>
            </main>
            <aside>
                <OnThisPage sections={sections} />
            </aside>
        </div >
    );
}
