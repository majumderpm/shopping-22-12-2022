import {useState,useEffect} from 'react';

const useOrders = email => {
    const [orders, setOrder] = useState([]);
    const [orderloading, setOrderloading] = useState(false);
    // console.log(email);

    useEffect(() => {
        setOrderloading(true);
        fetch(`http://localhost:5000/orders?email=${email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrder(data);
            setOrderloading(false);
        })
        .catch(err => console.error(err));
    }, [email])

    return [orders, setOrder, orderloading];
}

export default useOrders;