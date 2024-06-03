
const Pagination = ({ totalPosts, postPerPage, currentPage, setCurrentPage }: {
  totalPosts: number; postPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index)

  }
  return (
    <div>
      {
        pages?.map((page, index) => {
          return <button onClick={() => setCurrentPage(page)} className={`btn btn-sm ml-2 ${page == currentPage ? 'btn-secondary' : 'btn-outline '}`} key={index}>{page}</button>
        })
      }
    </div>
  );
};

export default Pagination;