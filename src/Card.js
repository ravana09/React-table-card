
import React from 'react';
import './App.css';



function Card(props) {
    return (
        <div className="col-lg-4">
            <div className='card mt-5 '>
                <div className='card-body'>
                    <h2 className="card-title text-muted text-uppercase text-center">{props.cData.title}</h2>
                    <div className='card-label'>
                        <h2 className="card-price text-center">${props.cData.price}<span className="period">/month</span></h2>
                        <hr />
                    </div>
                   
                    <ul className="fa-ul">
                        <li className='mb-4'><span className="fa-li"><i className="fas fa-check"></i></span>{props.cData.li1}</li>
                        <li className='mb-4'><span className="fa-li"><i className="fas fa-check"></i></span>{props.cData.li2}</li>
                        <li className='mb-4'><span className="fa-li"><i className="fas fa-check"></i></span>{props.cData.li3}</li>
                        <li className='mb-4'><span className="fa-li"><i className="fas fa-check"></i></span>{props.cData.li4}</li>
                        <li className='mb-4'>
                            <span className={`fa-li ${props.cData.price === 0 ? 'times-span' : ''}`}>
                                {props.cData.price === 0 ? <i className="fas fa-times times-icon"></i> : <i className="fas fa-check"></i>}  
                            </span>
                            <span className="next-span">{props.cData.li5}</span>
                        </li>
                        <li className='mb-4'>
                            <span className={`fa-li ${props.cData.price === 0 ? 'times-span' : ''}`}>
                                {props.cData.price === 0 ? <i className="fas fa-times times-icon"></i> : <i className="fas fa-check"></i>}  
                            </span>
                            <span className="next-span">{props.cData.li6}</span>
                        </li>
                        <li className='mb-4'>
                            <span className={`fa-li ${props.cData.price === 0 ? 'times-span' : ''}`}>
                                {props.cData.price === 0 ? <i className="fas fa-times times-icon"></i> : <i className="fas fa-check"></i>}  
                            </span>
                            <span className="next-span">{props.cData.li7}</span>
                        </li>
                        <li className='mb-4'>
                            <span className={`fa-li ${props.cData.price === 0 || props.cData.price === 9 ? 'times-span' : ''}`}>
                                {props.cData.price === 0 || props.cData.price === 9 ? <i className="fas fa-times times-icon"></i> : <i className="fas fa-check"></i>}
                            </span>
                            <span className="next-span">{props.cData.li8}</span>
                        </li>
                    </ul>
                    <div className="d-grid">
                        <button href="#" className="btn btn-primary text-uppercase button-1" type="submit">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;



