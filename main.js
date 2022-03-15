// silence 
const select = document.querySelector('.filter');

select.addEventListener('change', function (e) {
    const chosen_filter = e.target.value;
    const currently_visible = document.querySelectorAll('.item.active')
    const make_visible = document.querySelectorAll(`.item.${chosen_filter}`)
    
    currently_visible.forEach(function (category) {
        category.classList.remove('active');

    make_visible.forEach(function (category) {
        category.classList.add('active');
    });
        
    });

});
