const views = document.querySelectorAll('.view-panel')
console.log(views)

function updateView(selectedId){

    views.forEach(view => {
        view.style.display = 'none'
    })

    const targetView = document.getElementById(selectedId)
    if(targetView){
        targetView.style.display = 'block'
    }
}

updateView(views[0].id)