import React from 'react'
import config from '../../config/config.json'
import Card from './CardView/Card'
import { ShieldCheck, Zap, Server, Clock, FileText, RefreshCw, BellRing, CreditCard, BarChart3, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const about = [
        {
            icon: <Zap className="w-6 h-6 text-blue-500" size={'72px'} color='#1d4ed8' />,
            title: "Simple",
            description: "Easy to use, no technical skills needed."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-500" size={'72px'} color='#1d4ed8' />,
            title: "Secure",
            description: "Your data is safe with us."
        },
        {
            icon: <Server className="w-6 h-6 text-blue-500" size={'72px'} color='#1d4ed8' />,
            title: "Reliable",
            description: "Built for individuals, small businesses and teams."
        },
        {
            icon: <Clock className="w-6 h-6 text-blue-500" size={'72px'} color='#1d4ed8' />,
            title: "Fast",
            description: "Create and send invoices in seconds."
        }
    ]

    const features = [
        {
            icon: <FileText className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Easy Bill Creation",
            description: "Create and send invoices in just a few clicks."
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Track Payments",
            description: "Know what's paid, what's due, and what's overdue."
        },
        {
            icon: <BellRing className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Automated Reminders",
            description: "Reduce late payments with automatic notifications."
        },
        {
            icon: <CreditCard className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Multiple Payment Methods",
            description: "Accept payments via UPI transfer and more."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Reports & Insights",
            description: "Get detailed reports to understand your business better."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" color='#1d4ed8' />,
            title: "Secure & Reliable",
            description: "Your data and transactions are always protected."
        }
    ];

    const pricing = [
        {
            plan: 'Free',
            title: 'For personal use',
            amount: '₹0',
            usages: [
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Up to 10 invoices/month' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Basic reporting' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Email support' },
            ]
        }, {
            plan: 'Pro',
            title: 'For growing business',
            amount: '₹99',
            usages: [
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Up to 50 invoices/month' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Advanced reporting' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Automated reminders' },
            ]
        }, {
            plan: 'Business',
            title: 'For large members',
            amount: '₹299',
            usages: [
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Unliminted invoices' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Custom reporting' },
                { icon: <Check className="w-6 h-6 text-blue-500" color='#1d4ed8' />, msg: 'Team access' },
            ]
        }
    ]

    const navigate = useNavigate();

    const navigatePath = (val: string) => {
        navigate(`/${val}`);
    }

    return (
        <div className='container-fluid background-hero'>
            <header className='container mt-2 p-3'>
                <div className='d-flex align-items-center justify-content-between gap-3'>

                    <div className='d-flex align-items-center flex-shrink-0'>
                        <img src={`${config.img}logo.png`} alt='Smart Billing logo' width={36} height={36} />
                        <span className='ps-2 fs-sm-6 fs-md-5' style={{ fontSize: '18px', fontWeight: '600' }}>Smart Billing</span>
                    </div>

                    <nav className='d-none d-lg-flex align-items-center gap-3'>
                        <a href='#home' className='text-decoration-none nav-font'>Home</a>
                        <a href='#about' className='text-decoration-none nav-font'>About</a>
                        <a href='#features' className='text-decoration-none nav-font'>Features</a>
                        <a href='#pricing' className='text-decoration-none nav-font'>Pricing</a>
                        <a href='mailto:support@smartbilling.com?subject=Inquiry%20about%20Smart%20Billing&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about..' className='text-decoration-none nav-font'>Contact</a>
                    </nav>

                    <div className='d-flex gap-2' style={{ display: window.innerWidth >= 380 ? 'none' : 'flex' }}>
                        {window.innerWidth > 403 && <button className='login-btn' onClick={() => navigatePath('register')}>Login</button>}
                        <button className='signup-btn me-1 me-sm-2' onClick={() => navigatePath('register')}>Register</button>
                    </div>

                </div>
            </header>

            <section className='container mt-2 p-3' id='home'>
                <div className='row'>
                    <div className="col-12 col-lg-6 p-2 d-flex justify-content-center flex-column">
                        <h1 className='normal-h1'>
                            Smart Billing
                            <span className='span-h1'>Made Simple</span>
                        </h1>
                        <p className='letter'>Create invoices, track payments and send reminders from one place.</p>
                        <div>
                            <button className='signup-btn' onClick={() => navigatePath('register')} >Get Started Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 p-2">
                        <Card />
                    </div>
                </div>
            </section>

            <section id='about' className='container mt-4 px-3'>
                <div className="row mt-3">
                    <div className="col-12">
                        <h2 className='h2-heading mt-2'>About Us</h2>
                        <h2 className='h2-heading mt-4'>BUILDING A SIMPLE WAY TO BILL</h2>
                        <p className='sub-text mt-3'>Smart Billing is built for individuals and small businesses who want clear invoices and on-time payments, with no accounting background needed.</p>
                    </div>
                </div>
                <div className="row mt-2">
                    {
                        about && about.length != 0 && about.map((val, ind) => {
                            return (
                                <div className='col-md-3 col-sm-6 col-12 mb-4' key={ind}>
                                    <div className='icon-wrapper my-3'>
                                        {val.icon}
                                    </div>
                                    <label className='h2-heading'> {val.title} </label> <br />
                                    <label className='sub-text'>{val.description}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="provide-section py-5" id='features'>
                <div className="container">
                    <div className="mb-5">
                        <h2 className="h2-heading mt-2">What We Provide You</h2>
                        <p className="section-subtitle">Everything you need to manage your bills, in one place</p>
                    </div>

                    <div className="row g-4">
                        {features.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="provide-card h-100 p-4">
                                    <div className="icon-box mb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="h2-heading mt-2">{item.title}</h4>
                                    <p className="card-desc mb-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='pricing'>
                <div className="container">
                    <div className="mb-5">
                        <h2 className="h2-heading mt-2">Simple & Transparent Pricing</h2>
                        <p className="section-subtitle">Choose the plan that fits your needs. No hidden fees.</p>
                    </div>
                    <div className="row">
                        {
                            pricing && pricing.length != 0 && pricing.map((val, ind) => {
                                return (
                                    <div className='col-lg-4 col-md-6 col-12' key={ind}>
                                        <div className={ind % 2 === 0 ? "section-card-pricing h-100 p-4" : "section-card-pricing-sugg h-100 p-4"}>
                                            <p className='h2-heading mt-2'>{val.plan}</p>
                                            <p className='section-subtitle'>{val.title}</p>
                                            <p className='section-amount'>{val.amount} / <sub>month</sub></p>
                                            {val.usages.length != 0 && val.usages.map((val, id) => {
                                                return (
                                                    <div key={id} className='d-flex'>
                                                        {val.icon}
                                                        <p className='section-subtitle ms-2'>{val.msg}</p>
                                                    </div>
                                                )
                                            })}
                                            <button className={ind % 2 === 0 ? 'login-btn' : 'signup-btn'} onClick={() => navigatePath('register')}>Get Started</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <footer className='container mt-4'>
                <div className='d-flex align-items-center justify-content-between' style={{marginTop: '44px'}}>
                    <p>© 2026 Smart Billing</p>
                    <p>support.smartbill@gmail.com</p>
                </div>
            </footer>

        </div>
    )
}

export default LandingPage