import { useRouter } from "next/navigation";
import Button from "./form/Button";

type Props ={
    hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
}
const LoadMore = ({
    hasPreviousPage,
      hasNextPage,
      startCursor,
      endCursor
} :Props)=>{
    const router = useRouter();
    const handleNavigation = (direction: string)=>{
        const currentParams = new URLSearchParams(window.location.search);
        if(direction == 'next' && hasNextPage){
            currentParams.delete("startcursor");
            currentParams.set("endCursor", endCursor);
        }else if(direction == 'first' && hasPreviousPage){
            currentParams.delete('endcursor')
            currentParams.set('startcursor', startCursor)
        }

        const newSearchParams = currentParams.toString();
        const newPathname = `${window.location.pathname}?${newSearchParams}`
        router.push(newPathname);
    }
    return (
        <div className="w-full flexCenter gap-5 mt-10">
            {hasPreviousPage && (
                <Button title="First Page" handleClick={()=>handleNavigation('first')}/>
            )}
            {hasNextPage && (
                <Button title="Next" handleClick={()=>handleNavigation('next')}/>
            )}
        </div>
    )
}

export default LoadMore;