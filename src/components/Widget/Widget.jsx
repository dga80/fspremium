import React, { useState, useEffect } from 'react';
import './Widget.css';
import '../../assets/styles.css';

const Widget = () => {
    const [newsIndex, setNewsIndex] = useState(0); // Índice de la noticia actual
    const [newsData, setNewsData] = useState([]); // Datos de todas las noticias
    const [loading, setLoading] = useState(true);
    const apiKey = 'R7AHL29P9EZWPH5U'; // Tu API Key

    async function fetchData() {
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${apiKey}`);
            const result = await response.json();
            if (result.feed && result.feed.length > 0) {
                setNewsData(result.feed);
            } else {
                console.error('No se encontraron datos de noticias.');
            }
        } catch (error) {
            console.error('Error al cargar datos de noticias:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Cambiar de noticia cada 6 segundos
        const interval = setInterval(() => {
            setNewsIndex(prevIndex => (prevIndex + 1) % newsData.length);
        }, 6000);

        // Limpiar intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [newsData]);

    if (loading) {
        return <div className="widget">Loading...</div>;
    }

    if (!newsData || newsData.length === 0) {
        return <div className="widget">No news found</div>;
    }

    const { title, summary, banner_image } = newsData[newsIndex];

    return (
        <div className='widget'>
            <div className='widgetBox1'>
                <h4>{title}</h4>
                <p>{summary}</p>
            </div>
            <div className='widgetBox2'>
                <img src={banner_image} alt="Banner" className="bannerImage" />
            </div>
        </div>
    );
}

export default Widget;
