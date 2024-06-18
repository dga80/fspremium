import React, { useState, useEffect } from 'react';
import './Widget.css';
import '../../assets/styles.css';

const Widget = () => {
    const [newsIndex, setNewsIndex] = useState(0);
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = '_4ztbxZgIqDyobL1czLhx55dGPya8nnG';

    async function fetchData() {
        try {
            const response = await fetch(`https://api.polygon.io/v2/reference/news?limit=10&apiKey=${apiKey}`);
            const result = await response.json();
            if (result.results && result.results.length > 0) {
                setNewsData(result.results);
            } else {
                console.error('No news data found');
            }
        } catch (error) {
            console.error('Error loading news:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setNewsIndex(prevIndex => (prevIndex + 1) % newsData.length);
        }, 12000);

        return () => clearInterval(interval);
    }, [newsData]);

    if (loading) {
        return <div className="widget">Loading...</div>;
    }

    if (!newsData || newsData.length === 0) {
        return <div className="widget">No news found</div>;
    }

    const { title, article_url, image_url } = newsData[newsIndex];

    return (
        <div className='widget'>
            <div className='widgetBox2'>
                <img src={image_url} alt="Banner" className="bannerImage" />
            </div>
            <div className='widgetBox1'>
                <h4>{title}</h4>
                <p><a href={article_url} style={{ color: 'white' }} target="_blank" rel="noreferrer">Read more</a></p>
            </div>
        </div>
    );
}

export default Widget;
