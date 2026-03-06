import "./card.css";

interface characterprops{
    image:string,
    name: string,
    status: string
}

function Card({name, status, image}:characterprops) {

 return(
    <>
    <div className="cartacompleta">
            <img src={image} alt="" />

    <div className="Card">
        <h2>Nombre de carta</h2>
        <h3>{name}</h3>
        <h2>Estado</h2>
        <h3>{status}</h3>
    </div>
    </div>
    </>)
    }
export default Card
