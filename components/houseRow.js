import currencyFormatter from "../helpers/currencyFormatter";

//house is a prop that is passed to the component
const HouseRow = ({house}) => {
    return(
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    );
};

export default HouseRow;