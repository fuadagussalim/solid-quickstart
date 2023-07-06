import { createSignal } from 'solid-js';
import "./Card-1.css";


interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <div class="card">
      <img src={imageUrl} alt={title} class="card-image" />
      <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
