console.log('Hello World,Time to Scrape off Some Rust')


function mobileNav(){
    const navlist = document.getElementById('nav-list')
    navlist.classList.toggle('menu-active')
}   


function postContact(){
    const form = document.getElementById('contact-form')
    const formData = new FormData(form)
    const dataObject = Object.fromEntries(formData.entries())
    alert(`${dataObject.fname} Details Recieved`)

    form.reset()

}
