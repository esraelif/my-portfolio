import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' alt="" />
                <article>
                    <SectionTitle text='code and coffee' />
                    <p className='text-slate-600 mt-8 leading-loose'>With a background as a mathematics teacher, I bring a unique analytical perspective to my work as a frontend developer. My strong problem-solving skills and attention to detail, honed through years of teaching, allow me to create efficient and user-friendly interfaces. I am proficient in HTML, CSS, JavaScript, and React, and I enjoy blending creativity with logic to deliver seamless digital experiences. My passion for continuous learning drives me to stay updated with the latest industry trends and technologies.</p>
                </article>

            </div>

        </section>
    );
}

export default About;
