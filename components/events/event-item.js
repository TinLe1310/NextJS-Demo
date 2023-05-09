import style from './event-item.module.css';
import Button from "../ui/button";
import Link from 'next/link';

function EventItem(props){
    const { title, date, image, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = location.replace(', ','\n');
    const exploreLink = `/events/${id}`;
    
    return (
        <li className={style.item}>
            <img src={'/'+ image} alt={title} />
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{title}</h2>
                    <div className={style.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={style.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={style.actions}>
                    <Button link={exploreLink}>Explore Event</Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;