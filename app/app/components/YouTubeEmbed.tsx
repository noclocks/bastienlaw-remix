import React from 'react';
import '../styles/youtube.css';

// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    width?: string;
    height?: string;
}

export default function YouTubeEmbed({ videoId, title, width = "560", height = "315" }: YouTubeEmbedProps) {

    const src = `https://www.youtube.com/embed/${videoId}?si=NT6nO5iaFP_2BEKp`;

    return (
        <div className="youtube-container">
            <iframe
                width={width}
                height={height}
                src={src} //{`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            {/* <LiteYouTubeEmbed
                id={videoId || ''}
                title={title || ''}
                params=''
                adNetwork={true}
                playlist={false}
                poster='hqdefault'
                noCookie={true}
                ref={null}
            /> */}
        </div>
    );
}
