import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ shopData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q');


    //{shopData} 에서 {name}에 r이 포함된 것을 찾아서 새 배열을 만들기

    const searchResult = shopData.filter(it => it.name.toUpperCase().includes(r.toUpperCase()));


    return (
        <>
            <h1>
                {
                    searchResult.length === 0
                        ? <div>제품이 없어요</div>
                        : <div>{searchResult.length} 개의 상품이 있습니다.</div>
                }



            </h1>
            <ul className="list">
                {
                    searchResult.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure>
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong>
                                        {it.name}
                                    </strong>
                                    <p>
                                        {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>

    )
}

export default SearchResult;