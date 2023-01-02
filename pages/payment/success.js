import { useRouter } from "next/router";


const Success = () => {
    const router = useRouter()
    const { transaction_id } = router.query;
    console.log(transaction_id);

    return (
        <div>
            <h1 className="text-3xl text-slate-900">Success</h1>
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
