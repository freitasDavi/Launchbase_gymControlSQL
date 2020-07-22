const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    } 
}

function paginate(selectedPage, totalPages) {
    let pages = [],
        oldPage

    for(let paginaAtual = 1; paginaAtual <= totalPages; paginaAtual++) {

        const firstAndLastPage = paginaAtual == 1 || paginaAtual == totalPages
        const pageAfterSelectedPage = paginaAtual <= selectedPage + 2
        const pageBeforeSelectedPage = paginaAtual >= selectedPage - 2

        if(firstAndLastPage || pageBeforeSelectedPage && pageAfterSelectedPage) {
            if(oldPage && paginaAtual - oldPage > 2) {
                pages.push("...")
            }

            if(oldPage && paginaAtual - oldPage == 2) {
                pages.push(oldPage + 1)
            }

            pages.push(paginaAtual)

            oldPage = paginaAtual
        }
    }

    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter;
    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if(String(page).includes("...")){
            elements += `<span>${page}</span>`
        } else {
            if (filter) {
                elements += `<a href="${page}&filter=${filter}">${page}</a>`
            } else {
                elements += `<a href="${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements

}

const pagination = document.querySelector(".pagination")

if (pagination) {
    createPagination(pagination)
}

