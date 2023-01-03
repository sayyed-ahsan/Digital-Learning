import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Success = ({ trans_info }) => {
    console.log(trans_info);
    const router = useRouter()
    const { transaction_id } = router.query;
    console.log(transaction_id);

    const [paymentInfo, setPaymentInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/payment/${transaction_id}`)
            .then(res => res.json())
            .then(data => setPaymentInfo(data))
    }, [transaction_id])

    return (
        <div className="w-1/3 flex mx-auto my-10">



            <div className="mt-4 text-gray-500 sm:pr-8">
                <AiOutlineCheckCircle className="text-5xl " />


                <h3 className="mt-4 text-xl font-bold text-green-500">Payment Successfull</h3>

                <p className="mt-2 hidden text-sm sm:block">
                    {paymentInfo?.customer_name}
                </p>
            </div>


        </div>
    );
};

// export async function getServerSideProps(context) {
//     // const { bogId } = context.query;
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:3000/api/payment/${transaction_id}`);
//     const trans_info = await res.json();
//     // Pass data to the page via props
//     return { props: { trans_info } };
// }

export default Success;
