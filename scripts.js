$(document).ready(function() {
    const images = [
        { src: 'Hellcat.jpg', category: 'Muscle' },
        { src: 'Shelby.jpg', category: 'Muscle' },
        { src: 'm5 cs.jpg', category: 'German' },
        { src: 'C63S.jpg', category: 'German' },
        { src: 'Nissan-Skyline-GT-R-R34-255.jpg', category: 'JDM' },
        { src: 'lexus-lfa.jpg', category: 'JDM' }
    ];

    function displayImages(filter) {
        $('.gallery').fadeOut(300, function() {
            $(this).empty();
            images.forEach(image => {
                if (filter === 'all' || image.category === filter) {
                    $(this).append(`<img src="${image.src}" data-category="${image.category}">`);
                }
            });
            $(this).fadeIn(300);
        });
    }

    displayImages('all');

    $('.filters button').click(function() {
        const filter = $(this).attr('data-filter');
        displayImages(filter);
    });

    $(document).on('click', '.gallery img', function() {
        $('#lightbox-img').attr('src', $(this).attr('src'));
        $('#lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('#lightbox').fadeOut();
    });

    $('#lightbox').hide();
});
