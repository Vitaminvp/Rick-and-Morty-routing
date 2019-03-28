export const createPagination = (total, currentPage='1', className='linkPage') => { ///create Pagination
    let paginationText = "";
    if (total > 1) {
        let totalPages = total;
        let endPage = total;
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                if (i === +currentPage) {
                    paginationText += "<a class='currentPage'>" + currentPage + "</a>";
                } else {
                    paginationText += "<a class='" + className + "' data-page='" + i + "'>" + i + "</a>";
                }
            }
        } else {
            if (currentPage > 2 && currentPage <= totalPages - 2) {

                paginationText = "<a class='" + className + "' data-page='" + 1 + "'>" + 1 + "</a><span>...</span><a class='" + className + "'  data-page='" + (currentPage - 1) + "'>" + (currentPage - 1) + "</a><a class='currentPage'>" + currentPage + "</a><a class='" + className + "'   data-page='" + (+currentPage + 1) + "'>" + (+currentPage + 1) + "</a><span>...</span><a class='" + className + "'  data-page='" + endPage + "'>" + endPage + "</a>";
            } else if (currentPage <= 2) {

                for (let i = 1; i < 4; i++) {
                    if (i === +currentPage) {
                        paginationText += "<a class='currentPage'>" + currentPage + "</a>";
                    } else {
                        paginationText += "<a class='" + className + "'  data-page='" + i + "'>" + i + "</a>";
                    }
                }
                paginationText += "<span>...</span><a class='" + className + "'  data-page='" + endPage + "'>" + endPage + "</a>";
            } else if (currentPage > totalPages - 2) {
                for (let i = totalPages; i > totalPages - 3; i--) {
                    if (i === +currentPage) {
                        paginationText = "<a class='currentPage'>" + currentPage + "</a>" + paginationText;
                    } else {
                        paginationText = "<a class='" + className + "'  data-page='" + i + "'>" + i + "</a>" + paginationText;
                    }
                }
                paginationText = "<a class='" + className + "'  data-page='1'>" + 1 + "</a><span>...</span>" + paginationText;
            }
        }
        paginationText = "<div class='pagination'>" + paginationText + "</div>";
    }

    return paginationText;
};