const ListAll = ({ shopData }) => {
    return (
        <ul>
            {
                shopData.map((it, idx) => {
                    return (
                        <li>{it.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default ListAll;