export  default function List()
{
    const birds=["peacock","pigeon","kingfisher","owl","bat"]
    const result=birds.map((bi,index)=><li key={index}>{index}=> {bi}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
            </div>
    )
}