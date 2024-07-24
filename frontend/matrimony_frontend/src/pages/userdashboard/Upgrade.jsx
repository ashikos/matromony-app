import React from 'react'
import single from '../../assets/plus/single.png'
import crown1 from '../../assets/plus/crown1.svg'
import crowng1 from '../../assets/plus/crowng1.svg'
import crownp1 from '../../assets/plus/crownp1.svg'
import CheckoutBtn from '../../components/widgets/CheckoutBtn';


const Upgrade = () => {
  return (
    <div className='w-full  py-[8rem] px-4 bg-pink-100 text-black'>
    <div className="max-w-[1240px] gap-14 grid md:grid-cols-3 mx-auto text-2xl">
        <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
            <img className=' w-32 h-15 object-cover mx-auto ' src={crown1} alt="/" />
            <h2 className= 'text-3xl font-bold py-4 mt-2'>Free Tier</h2>
            <p className='text-4xl font-bold'>$199</p>
            <div className="font-medium  py-4" >
                <p className='py-2' >Unlimited friends</p>
                <p className='py-2'>Chating</p>
                <p className='py-2'>View Profiles</p>
            </div>
            <button className='mx-auto  bg-pink-600 text-white cursor-pointer mt-9 w-[200px] rounded-md py-3  '> 
            Continue free trial
        </button>
        </div>

        <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
            <img className=' w-32 h-15 object-cover mx-auto ' src={crowng1} alt="/" />
            <h2 className= 'text-3xl font-bold py-4 mt-2'>Free Tier</h2>
            <p className='text-4xl font-bold'>$199</p>
            <div className="font-medium  py-4" >
                <p className='py-2' >Unlimited friends</p>
                <p className='py-2'>Chating</p>
                <p className='py-2'>View Profiles</p>
            </div>
            <CheckoutBtn tier={Products.gold}/>
        </div>

        <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
            <img className='w-[13rem] h-[5rem] mx-auto ' src={crownp1} alt="/" />
            <h2 className= 'text-3xl font-bold py-4 mt-2'>Free Tier</h2>
            <p className='text-4xl font-bold'>$199</p>
            <div className="font-medium  py-4" >
                <p className='py-2' >Unlimited friends</p>
                <p className='py-2'>Chating</p>
                <p className='py-2'>View Profiles</p>
            </div>
            <CheckoutBtn tier={Products.diamond}/>
        </div>

        

    </div>
</div>
  )
}

const Products = {
    gold: {
        product_id:"prod_QWeF7da3a42qK8",
        price: 199
    },
    diamond: {
        product_id:"prod_QWhNPRMpm1mSZv",
        price: 299
    },
}


export default Upgrade