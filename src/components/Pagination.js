import { Pagination } from "react-bootstrap";
function PaginationBasic () {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 10; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    const paginationBasic = (
        <div>
          <Pagination>{items}</Pagination>
        </div>
      );
    return(paginationBasic)
}
export default PaginationBasic;