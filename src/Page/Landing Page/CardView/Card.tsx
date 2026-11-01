import React from 'react'

function Card() {
    return (
        <div className="mock" aria-hidden="true">
            <div className="top">
                <i className="mac-dot red"></i>
                <i className="mac-dot yellow"></i>
                <i className="mac-dot green"></i>
            </div>

            <div className="stats">
                <div className="stat">
                    <small>Total</small>
                    <b>₹24,500</b>
                </div>
                <div className="stat">
                    <small>Paid</small>
                    <b>₹18,000</b>
                </div>
                <div className="stat">
                    <small>Pending</small>
                    <b>₹5,500</b>
                </div>
            </div>

            <div className="bars">
                <i style={{ height: '30%' }}></i>
                <i style={{ height: '48%' }}></i>
                <i style={{ height: '40%' }}></i>
                <i style={{ height: '66%' }}></i>
                <i style={{ height: '58%' }}></i>
                <i style={{ height: '82%' }}></i>
                <i style={{ height: '100%' }}></i>
            </div>

            <div className="rows">
                <div className="row-item">
                    <span>INV-001 · Smart Traders</span>
                    <em className="status-paid">Paid</em>
                </div>
                <div className="row-item">
                    <span>INV-003 · Super Mart</span>
                    <em className="status-pending">Pending</em>
                </div>
            </div>
        </div>
    )
}

export default Card