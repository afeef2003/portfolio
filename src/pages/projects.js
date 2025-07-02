import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icon';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />       

            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-auto"
                    priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        '
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-auto"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} 
                        target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Syeda Shamama Afeef | Projects Page</title>
                <meta name="description" content="Learn more about Afnan Khan, a Data Scientist and the Founder & CEO of Gwen AI." />
            </Head>
            
            <main className="w-full mb-16 flex flex-col items-center justify-center min-h-screen dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" 
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4x1'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Facial Emotion Recognition System"
                                img="/images/projects/Emotion-recognition.jpg"
                                summary="A sophisticated machine learning system that can detect and classify human emotions from facial expressions in real-time, utilizing deep learning and computer vision techniques."
                                link="https://github.com/AFNANSH552/facial-emotion-recognition"
                                github="https://github.com/AFNANSH552/facial-emotion-recognition"
                                type="Computer Vision"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Credit Card Fraud Detection System"
                                img="/images/projects/Credit-Card.jpg"
                                link="https://github.com/AFNANSH552/Credit-card-Fraud-Detection/blob/main/BegumFTD.ipynb"
                                github="https://github.com/AFNANSH552/Credit-card-Fraud-Detection/blob/main/BegumFTD.ipynb"
                                type="Machine Learning"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Social Media Sentiment Analysis"
                                img="/images/projects/Socialmedia-Sentiment.jpg"
                                link="https://github.com/AFNANSH552/Social-Media-Sentiment-Analysis"
                                github="https://github.com/AFNANSH552/Social-Media-Sentiment-Analysis"
                                type="Natural Language Processing"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Bebo AI Chatbot"
                                img="/images/projects/Chat-bot.jpg"
                                summary="An intelligent conversational AI chatbot powered by natural language processing and machine learning, capable of understanding and responding to user queries in a human-like manner."
                                link="https://github.com/AFNANSH552/my-chatbot"
                                github="https://github.com/AFNANSH552/my-chatbot"
                                type="Artificial Intelligence"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Spam Email Detection System"
                                img="/images/projects/Spam-email.jpg"
                                link="https://github.com/AFNANSH552/email-spam"
                                github="https://github.com/AFNANSH552/email-spam"
                                type="Natural Language Processing"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Titanic Survival Classification System"
                                img="/images/projects/T2.png"
                                link="/"
                                github="/"
                                type="Data Science"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Real-Time Object Detection System"
                                img="/images/projects/Object-Detection.jpg"
                                summary="A computer vision system that can detect and classify multiple objects in real-time video streams, using state-of-the-art deep learning models and optimized for performance."
                                link="https://github.com/AFNANSH552/Titanic-Survival-Classification"
                                github="https://github.com/AFNANSH552/Titanic-Survival-Classification"
                                type="Computer Vision"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Netflix Stock Price Prediction"
                                img="/images/projects/Netflix-Stock.jpg"
                                link="https://github.com/AFNANSH552/Netflix-Stock-Price-Pridiction"
                                github="https://github.com/AFNANSH552/Netflix-Stock-Price-Pridiction"
                                type="Time Series Analysis"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project 
                                title="Ecommerce Sales Dashboard-BI"
                                img="/images/projects/Power-BI-Sales.jpg"
                                link="https://github.com/AFNANSH552/Ecommerce_Sales-Dashbord_PowerBI"
                                github="https://github.com/AFNANSH552/Ecommerce_Sales-Dashbord_PowerBI"
                                type="Business Intelligence"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;