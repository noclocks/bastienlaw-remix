import '../styles/youtube.css';

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    width?: string;
    height?: string;
}

export default function YouTubeEmbed({ videoId, title, width = "100%", height = "inherit" }: YouTubeEmbedProps) {

    const src = `https://www.youtube.com/embed/${videoId}?si=NT6nO5iaFP_2BEKp`;

    return (
        <div className="youtube-container">
            <iframe
                width={width}
                height={height}
                src={src} //{`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}
