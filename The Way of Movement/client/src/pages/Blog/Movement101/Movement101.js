import React from 'react';
import { OnThisPage } from '../../../components/OnThisPage';
import { BlogArchive } from '../../../components/BlogArchive';

export default function Movement101() {
    const activePostId = 1;
    const sections = [
        { id: '1', title: 'What is Movement?' },
        { id: '2', title: "What's the difference between a movement practice and exercising or specialising?" },
        { id: '3', title: 'How to begin crafting a movement practice?' },
      ];

    return (
        <div className="blog-container">
                  <BlogArchive activePostId={activePostId} />

            <main className="blog-content">
                <h3 id='1'>
                    What is Movement?
                </h3>
                <p>
                    Movement is literally everything, everything is in movement at all times, there is no stop to the miniscule vibrations which weave the fabric of existence and the universe together. It is even argued that these vibrations are the fabric of which atoms are made of. Things which appear to be still are only relatively still in comparison to yourself, even the land masses beneath our feet are in constant motion, even galaxies revolve around something. Yet, this is largely irrelevant for a movement practice, so, in terms of the human animal, movement refers to all of the moves you are possibly capable of.
                    No single human is capable of mastering all forms of movement, this is why the movement practitioner must become a generalist, a jack of all trades, master of none. This is why there can never be a master of movement, only high level practitioners. It is also what makes movement an incredibly interesting realm for exploration, in order to develop we must continually expose ourselves to new forms of movement, the practice must always be changing and, you along with it. The only remaining constant is the practice itself.
                    It is not easy to be a true movement practitioner, in continually trying new forms of movement, we are continually failing and humbling ourselves. We are always having to pick ourselves back up, working through the embarrassment, dealing with our injuries, working on our weaknesses as well as our strengths, and pushing through our limits. This may seem daunting and unnecessary, but for those with the determination and desire to explore their fullest potential, this is the way.
                </p>
                <h3 id='2'>
                    What's the difference between a movement practice and exercising or specialising?
                </h3>
                <p>
                    Allow me to start by defining what exercising is. A exercise is a single move which is completed repetitively with perfect form and set target benefits to be accrued through the long-term pursuit of the exercise. Exercising is what you do when you group a bunch of exercises together. Working out is the pinnacle of exercising, working out is done in the pursuit of strict muscle gains or increased strength output.
                    Specialising is when you pursue one form of movement as the ideal, it can be body building, marathon running, yoga, kick boxing, capoeira, contemporary dance, slack lining, parkour or many, many others. Some of these containers of movement have a more holistic approach to training the human animal, whilst others have a more reductionistic approach. Specialisation occurs when you adopt the mindset of being that kind of person, e.g. the yogi, the capoeirista, the boxer, the soccer player, the dancer, etc.
                    Now, these things aren't necessarily bad, they just tend to have a limited conceptualisation of what kinds of movement a human needs in order to properly nurture their body and to achieve their fullest potential in the broadest array of disciplines.
                    A movement practitioner is someone who practices the broadest range of movement containers/disciplines as is within their area. It is entirely possible that a movement practitioner can spread themselves too thin by trying to do too much at once. In order to achieve as high a level as possible in the broadest range of disciplines, the mover will have to only practice a limited amount of things at a time, then at certain intervals change some of what they practice, generally allow some to stay the same, and always be willing to reinvest time and energy within things which they've practiced but can still improve in (which will generally be anything and everything).
                    The point of making a distinction between these three forms of movement is not to say anything is better or worse, it is to say that we should avoid becoming complacent in what it is we practice. To always stay within only one movement discipline is to limit what you are capable of and to more than likely result in injuries cause by overuse and repetitiveness. There is nothing wrong with having a specialty, even as a movement practitioner, we want great martial artists, dancers, body builders, athletes, etc. we don't want people to have limiting beliefs of who they are and what they're capable of.
                    There are a few ways in which we can open ourselves up to a more holistic practice, 1. is to understand we are all movers and we are all movement practitioners. 2. is the concept of movement nutrition, of seeing how the different forms of movement we do affect us (e.g. if they leave us tight and pent up or weak, lazy and exhausted, etc). 3. Is to have an ecology of practices, even if you desire to become a great martial artist, an ecology of practices can provide you with certain physical stimuli that your body is craving but not receiving within your specialty.
                </p>
                <h3 id='3'>
                    How to begin crafting a movement practice?
                </h3>
                <p>
                    So, how can we practice movement, especially since it is so seemingly infinite in scope? Well, there is no one-size fits all here. There are simply protocols, methodologies, approaches and containers. For myself, once my paradigm of exercise and fitness begun shifting into that of movement, dance was the immediate response my body seemed to release. It seemed to me, at the time, to be the ultimate expression of freedom and self-exploration… Even though I had no idea how to actually dance.
                    The approach I would generally recommend for people to start their movement practice is, 1. work on your mobility (yes, with exercises), many of us have lost some of our most basic ranges of motion, e.g. to rest in a squat or to raise our arms above our heads. 2. What is it that attracts you? Try not to listen to your ego's answers of losing weight or gaining muscle mass, rather what is a skill you've always wanted to do? It's possible that whatever it is that attracts you also frightens you, there is a reason you've avoided it so far, and the approach would be to find an entrance point you can achieve or practice a different skill you're interested in that isn't so daunting. 3. You need an ecology of practices.
                    There is no single container which holds all of the keys to your body's full potential, there is no single thing you can do which will provide your body with all of the engagement and nutrition you require to sustainably practice it forever. The answer to this problem is an ecology of practices. Some of these practices will be fairly simple, like going for regular walks, some of them should involve improving your cardio-vascular system (and thus your body's ability to heal), some mobility, some skills, something which makes you feel alive, and something to relax and soothe your body.
                    This may sound like a dauntingly huge task, to start practicing many things at once but, it is the most sustainable and enjoyable way to practice your art. These things don't have to take a huge amount of time and energy out of your day and, there is no such thing as the perfect set of practices, most of them, if not all of them, have to be practiced every day and, unless you are extraordinarily motivated you don't have to hold yourself to a strict schedule of doing this and that at this time and this day.
                </p>
            </main>
            <aside>
                <OnThisPage sections={sections} />
            </aside>
        </div>
    );
}