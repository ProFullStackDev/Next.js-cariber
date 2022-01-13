export default function Pagination({ totalItem, itemPerPage, activePage }: { totalItem: number, itemPerPage: number, activePage: number }) {
  if (!activePage) {
    activePage = 1
  }
  const totalPage: number[] = Array.from(Array(Math.ceil(totalItem / itemPerPage)).keys())
  return (
    <div className={`pag ${totalPage.length <= 1 && "none"}`}>
      <a className={`pag-link pag-link-prev ${activePage <= 1 && "page-active disabled"}`}
        href={`?page=${activePage === 1 ? `1` : `${activePage - 1}`}`}>
        <i className="fa fa-arrow-left"></i>
      </a>
      {totalPage.map((value) => {
        return (
          <a key={`page-${value + 1}`}
            className={`pag-link pag-link-current ${activePage === value + 1 && "page-active disabled"}`}
            href={`?page=${value + 1}`}>{value + 1}</a>
        )
      })}
      <a className={`pag-link pag-link-next ${activePage >= totalPage.length && "page-active disabled"}`}
        href={`?page=${activePage === totalPage.length ? `${totalPage.length}` : `${activePage + 1}`}`}>
        <i className="fa fa-arrow-right"></i>
      </a>
    </div >
  )
}