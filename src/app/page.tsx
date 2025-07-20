'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Stethoscope,
  Utensils,
  MessageSquare,
  Calendar,
  BookOpen,
  Hospital,
  ChevronDown,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { cn } from '@/lib/utils';


const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("faq-item p-4 cursor-pointer border-b border-gray-200 last:border-b-0", { active: isOpen })} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question flex justify-between items-center text-lg font-semibold text-gray-800">
        {question}
        <ChevronDown className="w-6 h-6 text-blue-600 transition-transform" />
      </div>
      <div className="faq-answer text-gray-700 mt-2 pl-4">
        {answer}
      </div>
    </div>
  );
};

const Quiz = () => {
    const questions = [
        "Do you have diabetes?",
        "Do you have high blood pressure?",
        "Is there a history of kidney disease in your family?",
        "Are you over the age of 60?",
        "Do you take over-the-counter pain medications regularly?"
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{[key: number]: string}>({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (questionIndex: number, value: string) => {
        setAnswers({...answers, [questionIndex]: value});
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        setShowResult(true);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
    };

    if (showResult) {
        return (
             <div id="result" className="result-div mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <h4 className="text-xl font-bold text-blue-800 mb-4">Quiz Results</h4>
                <p className="text-gray-700 mb-4">Thank you for taking the assessment. Based on your responses, here's a general indication of your potential risk. Please consult a healthcare professional for a complete evaluation.</p>
                <Button onClick={restartQuiz} className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">Retake Quiz</Button>
            </div>
        )
    }

    return (
        <div id="quiz-container" className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div>
                {questions.map((q, index) => (
                    <div key={index} className={cn("question-slide", { 'hidden': currentQuestion !== index })}>
                        <p className="text-lg font-semibold text-gray-800 mb-4">{`${index + 1}. ${q}`}</p>
                        <div className="space-y-2">
                             <label className="flex items-center text-gray-700">
                                <input type="radio" name={`q${index}`} value="yes" className="mr-2" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'yes'} /> Yes
                            </label>
                            <label className="flex items-center text-gray-700">
                                <input type="radio" name={`q${index}`} value="no" className="mr-2" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'no'} /> No
                            </label>
                           {index < 3 && <label className="flex items-center text-gray-700">
                                <input type="radio" name={`q${index}`} value="unsure" className="mr-2" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'unsure'} /> Unsure
                            </label>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <Button id="prevBtn" onClick={prevQuestion} className={cn("bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-400 transition duration-300", { 'hidden': currentQuestion === 0 })}>Previous</Button>
                {currentQuestion < questions.length - 1 && <Button id="nextBtn" onClick={nextQuestion} className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">Next</Button>}
                {currentQuestion === questions.length - 1 && <Button id="submitBtn" onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition duration-300">Submit</Button>}
            </div>
        </div>
    );
};


export default function NirogyamPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <svg className="h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                            <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                            <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                        </svg>
                        <h1 className="text-2xl font-bold text-blue-600 ml-2">Nirogyam</h1>
                    </div>

                    <nav className="hidden md:flex space-x-1">
                        <div className="dropdown">
                            <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-blue-50">
                                I am a... <ChevronDown className="inline h-4 w-4" />
                            </button>
                            <div className="dropdown-content">
                                <h5 className="px-4 py-2 text-sm font-semibold text-gray-800">Patient</h5>
                                <a href="#kidney-topic" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Kidney Topics</a>
                                <a href="#renal-nutrition" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Diet & Nutrition</a>
                                <a href="#assess-kidney" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Know Your Risk Quiz</a>
                                <a href="#transplant-surgery" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Kidney Transplantation</a>
                                <h5 className="px-4 py-2 text-sm font-semibold text-gray-800 mt-2">Health Professional</h5>
                                <a href="#clinical-resources" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Clinical Resources</a>
                                <a href="#latest-research" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Latest Research</a>
                                <a href="#treatment-guidelines" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Treatment Guidelines</a>
                                <a href="#nutrition-recommendations" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Nutrition Recommendations</a>
                                <h5 className="px-4 py-2 text-sm font-semibold text-gray-800 mt-2">Caregiver</h5>
                                <a href="#support-resources" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Support Resources</a>
                                <a href="#diet-planning" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Diet Planning</a>
                                <a href="#treatment-preparation" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Treatment Preparation</a>
                                <a href="#post-treatment-care" className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Post-Treatment Care</a>
                            </div>
                        </div>
                        {/* Other dropdowns */}
                        <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-blue-50">Contact Us</a>

                    </nav>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} id="mobile-menu-button" className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#contact" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 font-medium rounded-md hover:bg-blue-50">Contact Us</a>
                        </div>
                    </div>
                )}
            </header>

            <main>
                <section className="hero-pattern py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">Nirogyam: Empowering You with Kidney Health Education</h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Your comprehensive resource for understanding kidney health, managing kidney disease, and finding support.</p>
                        <a href="#how-can-we-help" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg">Learn More</a>
                    </div>
                </section>

                <section id="how-can-we-help" className="py-16 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">How Can We Help?</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            So... you've been diagnosed with kidney disease.
                            Whether you've just received this diagnosis or have been sitting with it for a while, you're probably wondering the same thing: "How long until I'm on dialysis? And what can I do to avoid it?"
                            What if we told you that there are ways to preserve or even improve your kidney function?
                        </p>
                    </div>
                </section>

                <section id="iam-a-section" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-10">I am a...</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Patient</h4>
                                <ul className="text-gray-600 text-left pl-4 list-disc space-y-2">
                                    <li><a href="#kidney-topic" className="hover:underline text-blue-600">Kidney Topics</a></li>
                                    <li><a href="#renal-nutrition" className="hover:underline text-blue-600">Diet & Nutrition</a></li>
                                    <li><a href="#assess-kidney" className="hover:underline text-blue-600">Know Your Risk Quiz</a></li>
                                    <li><a href="#transplant-surgery" className="hover:underline text-blue-600">Kidney Transplantation</a></li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Health Professional</h4>
                                <ul className="text-gray-600 text-left pl-4 list-disc space-y-2">
                                    <li><a href="#clinical-resources" className="hover:underline text-blue-600">Clinical Resources</a></li>
                                    <li><a href="#latest-research" className="hover:underline text-blue-600">Latest Research</a></li>
                                    <li><a href="#treatment-guidelines" className="hover:underline text-blue-600">Treatment Guidelines</a></li>
                                    <li><a href="#nutrition-recommendations" className="hover:underline text-blue-600">Nutrition Recommendations</a></li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Caregiver</h4>
                                <ul className="text-gray-600 text-left pl-4 list-disc space-y-2">
                                    <li><a href="#support-resources" className="hover:underline text-blue-600">Support Resources</a></li>
                                    <li><a href="#diet-planning" className="hover:underline text-blue-600">Diet Planning</a></li>
                                    <li><a href="#treatment-preparation" className="hover:underline text-blue-600">Treatment Preparation</a></li>
                                    <li><a href="#post-treatment-care" className="hover:underline text-blue-600">Post-Treatment Care</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                 <section id="kidney-topic" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-blue-800 text-center mb-10">Kidney Topics</h3>
                        <p className="text-lg text-gray-700 text-center mb-8">This section provides a deeper dive into common and relevant topics for understanding kidney health, from basic functions to advanced treatments.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Topic Cards */}
                        </div>
                    </div>
                </section>

                <section id="assess-kidney" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">Assess Your Kidney Health</h3>
                        <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">Know Your Kidney Risk. Take our quick assessment to understand your risk factors for kidney disease. Early detection can help prevent or slow the progression of kidney disease.</p>
                        <Quiz />
                    </div>
                </section>

                <section id="renal-nutrition" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-blue-800 text-center mb-10">Renal Nutrition</h3>
                         <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">Understanding proper nutrition is crucial for managing kidney health. Explore our resources on dietary guidelines for various stages of kidney disease.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                           {/* Nutrition Cards */}
                        </div>
                    </div>
                </section>
                
                 <section id="kidney-conversations" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Kidney Conversations</h3>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Tune into our podcasts for in-depth discussions with experts, patient stories, and the latest advancements in kidney care. Expand your understanding wherever you are!</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Episode 1: Understanding CKD</h4>
                                <p className="text-gray-600 mb-4">An introductory episode covering the basics of Chronic Kidney Disease.</p>
                                <audio controls className="w-full">
                                    <source src="placeholder_podcast_1.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Episode 2: The Role of Diet</h4>
                                <p className="text-gray-600 mb-4">Expert insights on managing your diet for kidney health.</p>
                                <audio controls className="w-full">
                                    <source src="placeholder_podcast_2.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Episode 3: Patient Stories</h4>
                                <p className="text-gray-600 mb-4">Inspiring journeys and experiences from individuals living with kidney disease.</p>
                                <audio controls className="w-full">
                                    <source src="placeholder_podcast_3.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                        <div className="mt-10">
                            <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg">Explore More Podcasts</a>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-10">Our Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><Stethoscope className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Expert Articles</h4>
                                <p className="text-gray-600">Access a wealth of information written and reviewed by kidney health experts.</p>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><Utensils className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Dietary Guidance</h4>
                                <p className="text-gray-600">Find kidney-friendly recipes and personalized nutrition advice.</p>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><MessageSquare className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Support Forums</h4>
                                <p className="text-gray-600">Connect with a community of patients and caregivers for shared experiences.</p>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><Calendar className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Event Calendar</h4>
                                <p className="text-gray-600">Stay informed about upcoming webinars, workshops, and awareness campaigns.</p>
                            </div>
                             <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><BookOpen className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Resource Library</h4>
                                <p className="text-gray-600">Downloadable guides, infographics, and other helpful resources.</p>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
                                <div className="text-blue-600 text-4xl mb-4"><Hospital className="mx-auto h-12 w-12" /></div>
                                <h4 className="text-xl font-semibold text-blue-700 mb-3">Find a Specialist</h4>
                                <p className="text-gray-600">Directory of nephrologists and kidney care centers near you.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-10">What Our Community Says</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
                                <p className="text-gray-700 italic mb-4">"Nirogyam has been an invaluable resource in understanding my kidney condition. The information is so clear and easy to understand."</p>
                                <p className="font-semibold text-blue-600">- Priya S.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
                                <p className="text-gray-700 italic mb-4">"The dietary advice provided here has significantly helped me manage my diet and feel better. Highly recommend!"</p>
                                <p className="font-semibold text-blue-600">- Rajesh K.</p>
                            </div>
                             <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
                                <p className="text-gray-700 italic mb-4">"The assessment tool was a great starting point for me to realize the importance of kidney health."</p>
                                <p className="font-semibold text-blue-600">- Sunita R.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="faq" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-blue-800 text-center mb-10">Frequently Asked Questions</h3>
                        <div className="max-w-2xl mx-auto">
                            <FaqItem 
                                question="What are the early signs of kidney disease?"
                                answer="Early signs can be subtle and include fatigue, swelling in legs, ankles, or feet, changes in urination frequency, muscle cramps, and dry, itchy skin."
                            />
                            <FaqItem 
                                question="How can diet affect kidney health?"
                                answer="Diet plays a crucial role. A kidney-friendly diet often involves limiting sodium, potassium, and phosphorus intake, and managing protein consumption."
                            />
                            <FaqItem 
                                question="What is the difference between hemodialysis and peritoneal dialysis?"
                                answer="Hemodialysis uses an artificial kidney machine to filter waste and excess fluid from your blood, typically done at a clinic. Peritoneal dialysis uses the lining of your abdomen (peritoneum) to filter blood inside your body, which can often be done at home."
                            />
                        </div>
                    </div>
                </section>

                <section id="about" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">About Nirogyam</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">Nirogyam is dedicated to providing clear, reliable, and accessible information on kidney health. We believe that informed patients and caregivers are empowered to make the best decisions for their health journey. Our content is curated by medical professionals and patient advocates to ensure accuracy and relevance.</p>
                    </div>
                </section>

                <section id="contact" className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h3>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Have questions or need support? Reach out to us!</p>
                        <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
                            <form>
                                <div className="mb-4">
                                    <Input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <Input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <Textarea placeholder="Your Message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <Button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                            <ul>
                                <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
                                <li className="mb-2"><a href="#services" className="hover:underline">Services</a></li>
                                <li className="mb-2"><a href="#faq" className="hover:underline">FAQs</a></li>
                                <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="text-white hover:text-blue-300 text-2xl"><Facebook /></a>
                                <a href="#" className="text-white hover:text-blue-300 text-2xl"><Twitter /></a>
                                <a href="#" className="text-white hover:text-blue-300 text-2xl"><Instagram /></a>
                                <a href="#" className="text-white hover:text-blue-300 text-2xl"><Linkedin /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                            <p className="mb-2">Dept of Nephrology Command Hospital, Pune.</p>
                            <p className="mb-2">Email: nirogyam93@gmail.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <p className="text-sm border-t border-blue-700 pt-6">&copy; 2025 Nirogyam. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
