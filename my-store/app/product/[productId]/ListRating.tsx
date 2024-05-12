'use client';

import Heading from "@/app/components/Heading";

interface ListRatingProps {
    product:any;
}
const ListRating:React.FC<ListRatingProps> = ({product}) => {
    return ( 
        <div>
            <Heading title="Product Review"/>
            <div className="text-sm mt-2">
                {product.reviews && product.reviews.map((review)=>{
                    
                })}
            </div>
        </div>
     );
}
 
export default ListRating;